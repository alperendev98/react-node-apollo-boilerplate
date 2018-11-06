const handleError = require('./handleError');

describe('.handleError', async () => {
	test('check if function return same error', async () => {
		const error = 'Some Random Error';

		expect(() => {
			handleError(error);
		}).toThrow();

		expect(() => {
			handleError(error, null, {}, true);
		}).toThrow();

		expect(() => {
			handleError(error, 'My Custom Error!', {}, true);
		}).toThrow();
	});
});
