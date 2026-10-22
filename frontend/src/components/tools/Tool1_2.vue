<template>
	<div class="tool-layout tool1-2-layout">
		<h2>tool1-2</h2>
		<div class="split-container">
			<div class="pane left-pane">
				<h3>Sidebar Controls</h3>
				<ul class="control-list">
					<li>Option A</li>
					<li>Option B</li>
					<li>Option C</li>
				</ul>
			</div>
			<div class="pane right-pane">
				<h3>Main Workspace</h3>
				<p>Two-column split layout for tool1-2 content view.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool1_2'
}
</script>

<style scoped>
.tool1-2-layout {
	background: #fff;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool1-2-layout h2 {
	color: #202124;
	margin-top: 0;
}
.split-container {
	display: flex;
	gap: 16px;
	margin-top: 16px;
}
.pane {
	flex: 1;
	background: #f8f9fa;
	padding: 16px;
	border-radius: 6px;
	border: 1px solid #dadce0;
}
.control-list {
	list-style: none;
	padding: 0;
	margin: 0;
}
.control-list li {
	padding: 8px 12px;
	background: white;
	margin-bottom: 6px;
	border-radius: 4px;
	border: 1px solid #eee;
}
</style>
