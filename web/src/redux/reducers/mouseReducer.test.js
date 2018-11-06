import authReducer from './mouseReducer';

describe('mouseReducer TESTS', () => {
	let initialState = {};

	beforeEach(() => {
		initialState = {
			showSideNav: false
		};
	});

	it('should return state with `showSideNav: true` when SHOW_SIDE_NAV is dispatched', () => {
		const newState = authReducer(initialState, { type: 'SHOW_SIDE_NAV' });
		expect(newState.showSideNav).toBe(true);
	});

	it('should return state with `showSideNav: false` when HIDE_SIDE_NAV is dispatched', () => {
		const newState = authReducer(initialState, { type: 'HIDE_SIDE_NAV' });
		expect(newState.showSideNav).toBe(false);
	});
});
