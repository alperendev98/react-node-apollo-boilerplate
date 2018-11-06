import modalReducer from './modalReducer';

describe('modalReducer TESTS', () => {
	let initialState = {};

	beforeEach(() => {
		initialState = {
			isAddUtilityModalOpen: false
		};
	});

	it('should return state with `isAddUtilityModalOpen: true` when SHOW_ADD_UTILITY_MODAL is dispatched', () => {
		const newState = modalReducer(initialState, { type: 'SHOW_ADD_UTILITY_MODAL' });
		expect(newState.isAddUtilityModalOpen).toBe(true);
	});

	it('should return state with `isAddUtilityModalOpen: false` when HIDE_ADD_UTILITY_MODAL is dispatched', () => {
		const newState = modalReducer(initialState, { type: 'HIDE_ADD_UTILITY_MODAL' });
		expect(newState.isAddUtilityModalOpen).toBe(false);
	});
});
