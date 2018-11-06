import {
	AUTH_LOGIN_REQUESTED,
	AUTH_LOGIN_SUCCEEDED,
	AUTH_LOGIN_FAILED
} from '../actions/authActions';

const initialState = {
	isLoading: false
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case AUTH_LOGIN_REQUESTED:
			return {
				...state,
				isLoading: true
			};
		case AUTH_LOGIN_SUCCEEDED:
			return {
				...state,
				isLoading: false
			};
		case AUTH_LOGIN_FAILED:
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
}
