import startupMiddleware from './startupMiddleware';

describe('startupMiddleware TESTS', () => {
	it('should pass the intercepted action to next', () => {
		const nextArgs = [];
		const fakeNext = (...args) => {
			nextArgs.push(args);
		};
		const fakeStore = {};

		startupMiddleware(fakeStore)(fakeNext)({ type: 'RANDOM_ACTION' });

		expect(nextArgs[0][0].type).toBe('RANDOM_ACTION');
	});
});
