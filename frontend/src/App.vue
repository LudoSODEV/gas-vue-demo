<template>
	<div class="container">
		<h1>Google Apps Script + Vue 3</h1>
		<p class="subtitle">Modern Web App on GAS</p>
		
		<div class="card">
			<button @click="fetchData">Call GAS Backend</button>
			<div v-if="loading" class="loading">Loading...</div>
			<div v-if="message" class="result">
				<p><strong>Message:</strong> {{ message }}</p>
				<p><strong>Timestamp:</strong> {{ timestamp }}</p>
			</div>
			<div v-if="error" class="error">{{ error }}</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'

export default {
	name: 'App',
	setup()
	{
		const message = ref('')
		const timestamp = ref('')
		const loading = ref(false)
		const error = ref('')

		const fetchData = () =>
		{
			loading.value = true
			error.value = ''
			
			if (typeof google !== 'undefined' && google.script && google.script.run)
			{
				google.script.run
					.withSuccessHandler((result) =>
					{
						message.value = result.message
						timestamp.value = result.timestamp
						loading.value = false
					})
					.withFailureHandler((err) =>
					{
						error.value = err.message || 'Failed to call backend'
						loading.value = false
					})
					.getApiData()
			}
			else
			{
				// Local dev mock
				setTimeout(() =>
				{
					message.value = 'Mock response from local dev mode'
					timestamp.value = new Date().toISOString()
					loading.value = false
				}, 500)
			}
		}

		return {
			message,
			timestamp,
			loading,
			error,
			fetchData
		}
	}
}
</script>

<style scoped>
.container {
	max-width: 600px;
	margin: 40px auto;
	padding: 24px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	color: #333;
	text-align: center;
}

h1 {
	color: #1a73e8;
	margin-bottom: 8px;
}

.subtitle {
	color: #5f6368;
	margin-bottom: 24px;
}

.card {
	background: #fff;
	border: 1px solid #dadce0;
	border-radius: 8px;
	padding: 24px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

button {
	background-color: #1a73e8;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.2s;
}

button:hover {
	background-color: #1557b0;
}

.loading {
	margin-top: 16px;
	color: #5f6368;
}

.result {
	margin-top: 16px;
	padding: 12px;
	background: #f8f9fa;
	border-radius: 4px;
	text-align: left;
}

.error {
	margin-top: 16px;
	color: #d93025;
}
</style>
