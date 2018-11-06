import authReducer from './authReducer';

describe('authReducer TESTS', () => {
	let initialState = {};

	beforeEach(() => {
		initialState = {
			isLoading: false
		};
	});

	it('should return state with `isLoading: true` when AUTH_LOGIN_REQUESTED is dispatched', () => {
		const newState = authReducer(initialState, { type: 'AUTH_LOGIN_REQUESTED' });
		expect(newState.isLoading).toBe(true);
	});

	it('should return state with `isLoading: false` when AUTH_LOGIN_SUCCEEDED is dispatched', () => {
		const newState = authReducer(initialState, { type: 'AUTH_LOGIN_SUCCEEDED' });
		expect(newState.isLoading).toBe(false);
	});

	it('should return state with `isLoading: false` when AUTH_LOGIN_FAILED is dispatched', () => {
		const newState = authReducer(initialState, { type: 'AUTH_LOGIN_FAILED' });
		expect(newState.isLoading).toBe(false);
	});
});
