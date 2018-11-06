const logger = require('./logger');

describe('.logger', () => {
	test('should log on the console and no exception should be thrown', () => {
		logger.info('Info: Logging works :-) ');
		logger.silly('Silly: Logging works :-) ');
		logger.debug('Debug: Logging works :-) ');
		logger.verbose('Verbose: Logging works :-) ');
		logger.warn('Warn: Logging works :-) ');
		logger.error('Error: Logging works :-) ');
	});
});
