function doGet()
{
	return HtmlService.createHtmlOutputFromFile('Page')
		.setTitle('GAS Vue Web App')
		.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getApiData()
{
	return {
		message: 'Hello from Google Apps Script backend!',
		timestamp: new Date().toISOString()
	};
}
