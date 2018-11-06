import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { loginRequested, loginSucceeded, testApiConnection } from './authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions TESTS', () => {
	it('loginRequested should return {type: `AUTH_LOGIN_REQUESTED`}', () => {
		expect(loginRequested().type).toBe('AUTH_LOGIN_REQUESTED');
	});

	it('startupDataLoaded should return {type: `AUTH_LOGIN_SUCCEEDED`}', () => {
		expect(loginSucceeded().type).toBe('AUTH_LOGIN_SUCCEEDED');
	});

	it('expected actions should be dispatched on successful request', () => {
		const store = mockStore({});
		const expectedActions = ['TEST_API_STARTED', 'TEST_API_SUCCESS'];

		return store.dispatch(testApiConnection()).then(() => {
			const actualActions = store.getActions().map(action => action.type);
			expect(actualActions).toEqual(expect.arrayContaining(expectedActions));
		});
	});

	// it('expected actions should be dispatched on failed request', () => {
	//   const store = mockStore({})
	//   const expectedActions = [
	//       'updateProductStarted',
	//       'updateProductFailure'
	//   ]

	//   return store.dispatch(fetchSomething())
	//     .then(() => {
	//       const actualActions = store.getActions().map(action => action.type)
	//       expect(actualActions).to.eql(expectedActions)
	//    })

	// })
});
