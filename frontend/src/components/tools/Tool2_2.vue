<template>
	<div class="tool-layout tool2-2-layout">
		<h2>tool2-2</h2>
		<div class="timeline">
			<div class="timeline-item">
				<span class="dot"></span>
				<div class="timeline-content">
					<h4>Initialization</h4>
					<p>System started successfully at 08:00 AM</p>
				</div>
			</div>
			<div class="timeline-item">
				<span class="dot"></span>
				<div class="timeline-content">
					<h4>Data Sync</h4>
					<p>Synchronized 1,420 records with database</p>
				</div>
			</div>
			<div class="timeline-item">
				<span class="dot"></span>
				<div class="timeline-content">
					<h4>Backup Completed</h4>
					<p>Daily snapshot secured</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tool2_2'
}
</script>

<style scoped>
.tool2-2-layout {
	background: #fff;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool2-2-layout h2 {
	color: #202124;
	margin-top: 0;
}
.timeline {
	margin-top: 20px;
	border-left: 2px solid #1a73e8;
	padding-left: 20px;
	margin-left: 10px;
	text-align: left;
}
.timeline-item {
	position: relative;
	margin-bottom: 20px;
}
.dot {
	position: absolute;
	left: -27px;
	top: 4px;
	width: 12px;
	height: 12px;
	background: #1a73e8;
	border-radius: 50%;
	border: 2px solid white;
}
.timeline-content h4 {
	margin: 0 0 4px 0;
	color: #202124;
}
.timeline-content p {
	margin: 0;
	color: #5f6368;
	font-size: 14px;
}
</style>
