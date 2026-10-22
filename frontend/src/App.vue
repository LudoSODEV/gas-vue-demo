<template>
	<div class="app-container">
		<header class="app-header">
			<h1>GAS Vue Demo</h1>
			<p class="subtitle">Stateful Multi-Tool Application</p>
		</header>

		<div class="main-layout">
			<nav class="sidebar">
				<div v-for="section in sections" :key="section.id" class="nav-section">
					<h3 class="section-title">{{ section.name }}</h3>
					<ul class="tool-list">
						<li v-for="tool in section.tools" :key="tool.id">
							<a
								:href="getToolUrl(section.id, tool.id)"
								@click.prevent="selectTool(section.id, tool.id)"
								:class="{ active: currentSection === section.id && currentTool === tool.id }"
							>
								{{ tool.name }}
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<main class="content-area">
				<component :is="currentToolComponent" />
			</main>
		</div>
	</div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Tool1_1 from './components/tools/Tool1_1.vue'
import Tool1_2 from './components/tools/Tool1_2.vue'
import Tool1_3 from './components/tools/Tool1_3.vue'
import Tool2_1 from './components/tools/Tool2_1.vue'
import Tool2_2 from './components/tools/Tool2_2.vue'
import Tool2_3 from './components/tools/Tool2_3.vue'
import Tool3_1 from './components/tools/Tool3_1.vue'
import Tool3_2 from './components/tools/Tool3_2.vue'
import Tool3_3 from './components/tools/Tool3_3.vue'

export default {
	name: 'App',
	setup()
	{
		const sections = [
			{
				id: 'sect1',
				name: 'Section 1',
				tools: [
					{ id: 'tool1-1', name: 'tool1-1' },
					{ id: 'tool1-2', name: 'tool1-2' },
					{ id: 'tool1-3', name: 'tool1-3' }
				]
			},
			{
				id: 'sect2',
				name: 'Section 2',
				tools: [
					{ id: 'tool2-1', name: 'tool2-1' },
					{ id: 'tool2-2', name: 'tool2-2' },
					{ id: 'tool2-3', name: 'tool2-3' }
				]
			},
			{
				id: 'sect3',
				name: 'Section 3',
				tools: [
					{ id: 'tool3-1', name: 'tool3-1' },
					{ id: 'tool3-2', name: 'tool3-2' },
					{ id: 'tool3-3', name: 'tool3-3' }
				]
			}
		]

		const currentSection = ref('sect1')
		const currentTool = ref('tool1-1')

		const toolComponentMap = {
			'tool1-1': Tool1_1,
			'tool1-2': Tool1_2,
			'tool1-3': Tool1_3,
			'tool2-1': Tool2_1,
			'tool2-2': Tool2_2,
			'tool2-3': Tool2_3,
			'tool3-1': Tool3_1,
			'tool3-2': Tool3_2,
			'tool3-3': Tool3_3
		}

		const currentToolComponent = computed(() =>
		{
			return toolComponentMap[currentTool.value] || Tool1_1
		})

		const applyState = (secId, toolId) =>
		{
			if (toolComponentMap[toolId])
			{
				currentSection.value = secId
				currentTool.value = toolId
			}
		}

		const getToolUrl = (secId, toolId) =>
		{
			return `?section=${secId}&tool=${toolId}`
		}

		const updateHistory = (secId, toolId, isReplace = false) =>
		{
			const stateObject = { section: secId, tool: toolId }
			const queryParams = { section: secId, tool: toolId }

			if (window.google?.script?.history)
			{
				if (isReplace)
				{
					google.script.history.replace(stateObject, queryParams, '')
				}
				else
				{
					google.script.history.push(stateObject, queryParams, '')
				}
			}
			else
			{
				// Fallback for local development
				const url = new URL(window.location.href)
				url.searchParams.set('section', secId)
				url.searchParams.set('tool', toolId)
				url.hash = ''
				if (isReplace)
				{
					window.history.replaceState(stateObject, '', url.toString())
				}
				else
				{
					window.history.pushState(stateObject, '', url.toString())
				}
			}
		}

		const selectTool = (secId, toolId) =>
		{
			applyState(secId, toolId)
			updateHistory(secId, toolId, false)
		}

		const handlePopState = (e) =>
		{
			if (e && e.state && e.state.section && e.state.tool)
			{
				applyState(e.state.section, e.state.tool)
			}
			else
			{
				const params = new URLSearchParams(window.location.search)
				const sec = params.get('section') || params.get('sect') || 'sect1'
				const tool = params.get('tool') || 'tool1-1'
				if (toolComponentMap[tool])
				{
					applyState(sec, tool)
				}
			}
		}

		onMounted(() =>
		{
			// 1. Check initial params injected from server (window.INITIAL_PARAMS)
			const initialParams = window.INITIAL_PARAMS || {}
			const initSec = initialParams.section || initialParams.sect
			const initTool = initialParams.tool

			if (initSec && initTool && toolComponentMap[initTool])
			{
				applyState(initSec, initTool)
				updateHistory(initSec, initTool, true)
			}
			else
			{
				// 2. Check browser query parameters
				const params = new URLSearchParams(window.location.search)
				const qSec = params.get('section') || params.get('sect')
				const qTool = params.get('tool')

				if (qSec && qTool && toolComponentMap[qTool])
				{
					applyState(qSec, qTool)
					updateHistory(qSec, qTool, true)
				}
				else
				{
					updateHistory(currentSection.value, currentTool.value, true)
				}
			}

			if (window.google?.script?.history)
			{
				google.script.history.setChangeHandler((e) =>
				{
					const params = e.location?.parameters || {}
					const sec = params.section || params.sect || 'sect1'
					const tool = params.tool || 'tool1-1'
					if (toolComponentMap[tool])
					{
						applyState(sec, tool)
					}
				})
			}
			else
			{
				window.addEventListener('popstate', handlePopState)
			}
		})

		onUnmounted(() =>
		{
			if (!window.google?.script?.history)
			{
				window.removeEventListener('popstate', handlePopState)
			}
		})

		return {
			sections,
			currentSection,
			currentTool,
			currentToolComponent,
			getToolUrl,
			selectTool
		}
	}
}
</script>

<style>
body {
	margin: 0;
	background: #f4f6f9;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	color: #333;
}

.app-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
}

.app-header {
	background: white;
	padding: 20px 24px;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.05);
	margin-bottom: 20px;
}

.app-header h1 {
	margin: 0 0 4px 0;
	color: #1a73e8;
	font-size: 24px;
}

.subtitle {
	margin: 0;
	color: #5f6368;
	font-size: 14px;
}

.main-layout {
	display: flex;
	gap: 24px;
}

.sidebar {
	width: 240px;
	background: white;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.05);
	flex-shrink: 0;
}

.nav-section {
	margin-bottom: 20px;
}

.section-title {
	font-size: 13px;
	text-transform: uppercase;
	color: #5f6368;
	margin: 0 0 8px 8px;
	letter-spacing: 0.5px;
}

.tool-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.tool-list li {
	margin-bottom: 4px;
}

.tool-list a {
	display: block;
	padding: 8px 12px;
	color: #3c4043;
	text-decoration: none;
	border-radius: 4px;
	font-size: 14px;
	transition: background 0.2s, color 0.2s;
}

.tool-list a:hover {
	background: #f1f3f4;
	color: #1a73e8;
}

.tool-list a.active {
	background: #e8f0fe;
	color: #1a73e8;
	font-weight: 500;
}

.content-area {
	flex-grow: 1;
}

@media (max-width: 768px) {
	.main-layout {
		flex-direction: column;
	}
	.sidebar {
		width: 100%;
	}
}
</style>
