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
								href="#"
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

		const parseHash = () =>
		{
			const hash = window.location.hash.replace('#', '')
			if (!hash)
			{
				return
			}
			const parts = hash.split('/')
			if (parts.length >= 2)
			{
				const sec = parts[0]
				const tool = parts[1]
				if (toolComponentMap[tool])
				{
					currentSection.value = sec
					currentTool.value = tool
				}
			}
		}

		const selectTool = (secId, toolId) =>
		{
			currentSection.value = secId
			currentTool.value = toolId
			window.location.hash = `#${secId}/${toolId}`
		}

		const handleHashChange = () =>
		{
			parseHash()
		}

		onMounted(() =>
		{
			if (window.location.hash)
			{
				parseHash()
			}
			else
			{
				window.location.hash = `#${currentSection.value}/${currentTool.value}`
			}
			window.addEventListener('hashchange', handleHashChange)
		})

		onUnmounted(() =>
		{
			window.removeEventListener('hashchange', handleHashChange)
		})

		return {
			sections,
			currentSection,
			currentTool,
			currentToolComponent,
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
