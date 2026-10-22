<template>
	<div class="tool-layout tool1-1-layout">
		<div class="hero-banner">
			<h2>tool1-1</h2>
			<p>Hero banner layout variant for tool1-1</p>
		</div>
		<div class="content-body">
			<div class="action-box">
				<button class="primary-btn">Execute Action</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool1_1'
}
</script>

<style scoped>
.tool1-1-layout {
	background: #f0f4f8;
	border-radius: 8px;
	padding: 24px;
}
.hero-banner {
	background: linear-gradient(135deg, #1a73e8, #4285f4);
	color: white;
	padding: 32px;
	border-radius: 6px;
	text-align: center;
	margin-bottom: 20px;
}
.hero-banner h2 {
	margin: 0 0 8px 0;
	font-size: 28px;
}
.content-body {
	background: white;
	padding: 20px;
	border-radius: 6px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.primary-btn {
	background: #1a73e8;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 4px;
	cursor: pointer;
}
</style>
