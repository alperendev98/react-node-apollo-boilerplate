const utilities = require('./utilities');
const logger = require('../logger');

(async function() {
	try {
		await utilities();
	} catch (e) {
		logger.error(`Error bootstrapping: ${e}`);
	}
})();
