<template>
	<div class="tool-layout tool3-2-layout">
		<h2>tool3-2</h2>
		<div class="settings-panel">
			<div class="setting-row">
				<span>Enable Notifications</span>
				<input type="checkbox" checked />
			</div>
			<div class="setting-row">
				<span>Dark Mode Theme</span>
				<input type="checkbox" />
			</div>
			<div class="setting-row">
				<span>Auto Save Interval (min)</span>
				<input type="number" value="5" class="number-input" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool3_2'
}
</script>

<style scoped>
.tool3-2-layout {
	background: #fff;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool3-2-layout h2 {
	color: #202124;
	margin-top: 0;
}
.settings-panel {
	background: #f8f9fa;
	padding: 16px;
	border-radius: 6px;
	border: 1px solid #dadce0;
	max-width: 450px;
}
.setting-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	border-bottom: 1px solid #e0e0e0;
	color: #3c4043;
}
.setting-row:last-child {
	border-bottom: none;
}
.number-input {
	width: 60px;
	padding: 4px 8px;
	border: 1px solid #bdc1c6;
	border-radius: 4px;
}
</style>
