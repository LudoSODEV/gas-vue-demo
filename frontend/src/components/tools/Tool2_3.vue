<template>
	<div class="tool-layout tool2-3-layout">
		<h2>tool2-3</h2>
		<div class="kanban-board">
			<div class="kanban-column">
				<h4>To Do</h4>
				<div class="kanban-card">Task Alpha</div>
				<div class="kanban-card">Task Beta</div>
			</div>
			<div class="kanban-column">
				<h4>In Progress</h4>
				<div class="kanban-card">Task Gamma</div>
			</div>
			<div class="kanban-column">
				<h4>Done</h4>
				<div class="kanban-card">Task Delta</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool2_3'
}
</script>

<style scoped>
.tool2-3-layout {
	background: #fff;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool2-3-layout h2 {
	color: #202124;
	margin-top: 0;
}
.kanban-board {
	display: flex;
	gap: 16px;
	margin-top: 16px;
}
.kanban-column {
	flex: 1;
	background: #f1f3f4;
	padding: 12px;
	border-radius: 6px;
	text-align: left;
}
.kanban-column h4 {
	margin: 0 0 12px 0;
	color: #3c4043;
	font-size: 15px;
}
.kanban-card {
	background: white;
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 8px;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05);
	font-size: 14px;
	border: 1px solid #e0e0e0;
}
</style>
