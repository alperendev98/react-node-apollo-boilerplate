import { SHOW_SIDE_NAV, HIDE_SIDE_NAV } from '../actions/mouseActions';

const initialState = {
	showSideNav: false
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case SHOW_SIDE_NAV:
			return {
				...state,
				showSideNav: true
			};
		case HIDE_SIDE_NAV:
			return {
				...state,
				showSideNav: false
			};
		default:
			return state;
	}
}
