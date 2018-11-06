import { showAddUtilityModal, hideAddUtilityModal } from './modalActions';

describe('modalActions TESTS', () => {
	it('showAddUtilityModal should return {type: `SHOW_ADD_UTILITY_MODAL`}', () => {
		expect(showAddUtilityModal().type).toBe('SHOW_ADD_UTILITY_MODAL');
	});

	it('hideAddUtilityModal should return {type: `HIDE_ADD_UTILITY_MODAL`}', () => {
		expect(hideAddUtilityModal().type).toBe('HIDE_ADD_UTILITY_MODAL');
	});
});
