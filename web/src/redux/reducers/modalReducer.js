import { SHOW_ADD_UTILITY_MODAL, HIDE_ADD_UTILITY_MODAL } from '../actions/modalActions';

const initialState = {
	isAddUtilityModalOpen: false
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case SHOW_ADD_UTILITY_MODAL:
			return {
				...state,
				isAddUtilityModalOpen: true
			};
		case HIDE_ADD_UTILITY_MODAL:
			return {
				...state,
				isAddUtilityModalOpen: false
			};
		default:
			return state;
	}
}
