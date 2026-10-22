<template>
	<div class="tool-layout tool3-3-layout">
		<h2>tool3-3</h2>
		<div class="analytics-card">
			<div class="chart-mock">
				<div class="bar" style="height: 40%"></div>
				<div class="bar" style="height: 70%"></div>
				<div class="bar" style="height: 55%"></div>
				<div class="bar" style="height: 90%"></div>
				<div class="bar" style="height: 65%"></div>
			</div>
			<p class="chart-caption">Weekly Activity Overview</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool3_3'
}
</script>

<style scoped>
.tool3-3-layout {
	background: #fff;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool3-3-layout h2 {
	color: #202124;
	margin-top: 0;
}
.analytics-card {
	background: #f8f9fa;
	padding: 20px;
	border-radius: 6px;
	border: 1px solid #dadce0;
	max-width: 400px;
}
.chart-mock {
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	height: 120px;
	background: white;
	padding: 12px;
	border-radius: 4px;
	border: 1px solid #e0e0e0;
}
.bar {
	width: 32px;
	background: #1a73e8;
	border-radius: 4px 4px 0 0;
}
.chart-caption {
	margin: 12px 0 0 0;
	color: #5f6368;
	font-size: 14px;
}
</style>
