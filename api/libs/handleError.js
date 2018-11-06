const config = require('config').get('env');
const logger = require('./logger');

module.exports = (err, customMessage, location, isProduction = config.get('isProduction')) => {
	logger.error(location || '', err);

	if (!isProduction) {
		throw err;
	}

	throw new Error(customMessage || 'Something went wrong!');
};
