<template>
	<div class="tool-layout tool1-3-layout">
		<h2>tool1-3</h2>
		<div class="metrics-grid">
			<div class="metric-card">
				<span class="label">Total Users</span>
				<span class="value">1,248</span>
			</div>
			<div class="metric-card">
				<span class="label">Active Sessions</span>
				<span class="value">342</span>
			</div>
			<div class="metric-card">
				<span class="label">Performance</span>
				<span class="value">99.8%</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool1_3'
}
</script>

<style scoped>
.tool1-3-layout {
	background: #fdfdfd;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool1-3-layout h2 {
	color: #202124;
	margin-top: 0;
}
.metrics-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	gap: 16px;
	margin-top: 16px;
}
.metric-card {
	background: white;
	padding: 20px;
	border-radius: 6px;
	border: 1px solid #dadce0;
	text-align: center;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.metric-card .label {
	display: block;
	color: #5f6368;
	font-size: 14px;
	margin-bottom: 8px;
}
.metric-card .value {
	display: block;
	color: #1a73e8;
	font-size: 24px;
	font-weight: bold;
}
</style>
