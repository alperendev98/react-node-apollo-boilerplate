import store from './store';

describe('REDUX store TESTS', () => {
	it('store has 4 reducers', () => {
		expect(Object.keys(store.getState()).length).toBe(4);
	});
});
