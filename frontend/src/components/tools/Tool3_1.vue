<template>
	<div class="tool-layout tool3-1-layout">
		<h2>tool3-1</h2>
		<table class="data-table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>#001</td>
					<td>Report Generation</td>
					<td><span class="badge active">Active</span></td>
				</tr>
				<tr>
					<td>#002</td>
					<td>Data Export</td>
					<td><span class="badge pending">Pending</span></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'Tool3_1'
}
</script>

<style scoped>
.tool3-1-layout {
	background: #fff;
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #e0e0e0;
}
.tool3-1-layout h2 {
	color: #202124;
	margin-top: 0;
}
.data-table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 16px;
	text-align: left;
}
.data-table th,
.data-table td {
	padding: 10px 12px;
	border-bottom: 1px solid #e0e0e0;
}
.data-table th {
	background: #f8f9fa;
	color: #3c4043;
}
.badge {
	padding: 4px 8px;
	border-radius: 12px;
	font-size: 12px;
}
.badge.active {
	background: #e6f4ea;
	color: #137333;
}
.badge.pending {
	background: #fef7e0;
	color: #b06000;
}
</style>
