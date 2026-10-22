<template>
	<div class="tool-layout tool2-1-layout">
		<h2>tool2-1</h2>
		<div class="form-container">
			<div class="form-group">
				<label>Configuration Parameter</label>
				<input type="text" placeholder="Enter value..." />
			</div>
			<div class="form-group">
				<label>Mode Select</label>
				<select>
					<option>Standard Mode</option>
					<option>Advanced Mode</option>
				</select>
			</div>
			<button class="submit-btn">Save Configuration</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool2_1'
}
</script>

<style scoped>
.tool2-1-layout {
	background: #fff;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool2-1-layout h2 {
	color: #202124;
	margin-top: 0;
}
.form-container {
	background: #f8f9fa;
	padding: 20px;
	border-radius: 6px;
	border: 1px solid #dadce0;
	max-width: 400px;
}
.form-group {
	margin-bottom: 16px;
	text-align: left;
}
.form-group label {
	display: block;
	font-weight: 500;
	margin-bottom: 6px;
	color: #3c4043;
}
.form-group input,
.form-group select {
	width: 100%;
	padding: 8px 12px;
	border: 1px solid #bdc1c6;
	border-radius: 4px;
	box-sizing: border-box;
}
.submit-btn {
	background: #34a853;
	color: white;
	border: none;
	padding: 10px 16px;
	border-radius: 4px;
	cursor: pointer;
}
</style>
