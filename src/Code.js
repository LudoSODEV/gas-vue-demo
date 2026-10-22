function doGet(e)
{
	const template = HtmlService.createTemplateFromFile('Page');
	template.initialParams = JSON.stringify(e && e.parameter ? e.parameter : {});
	return template.evaluate()
		.setTitle('GAS Stateful Vue App')
		.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getApiData()
{
	return {
		message: 'Hello from Google Apps Script backend!',
		timestamp: new Date().toISOString()
	};
}
