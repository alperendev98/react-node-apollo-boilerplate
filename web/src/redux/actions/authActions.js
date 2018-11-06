export const AUTH_LOGIN_REQUESTED = 'AUTH_LOGIN_REQUESTED';
export const AUTH_LOGIN_SUCCEEDED = 'AUTH_LOGIN_SUCCEEDED';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
export const TEST_API_STARTED = 'TEST_API_STARTED';
export const TEST_API_SUCCESS = 'TEST_API_SUCCESS';
export const TEST_API_FAIL = 'TEST_API_FAIL';

export const loginRequested = () => ({
	type: AUTH_LOGIN_REQUESTED
});

export const loginSucceeded = () => ({
	type: AUTH_LOGIN_SUCCEEDED
});

const testApiStarted = () => ({
	type: TEST_API_STARTED
});

const testApiSucceeded = () => ({
	type: TEST_API_SUCCESS
});

const testApiFailed = () => ({
	type: TEST_API_FAIL
});

export const testApiConnection = () => {
	return dispatch => {
		dispatch(testApiStarted());

		return fetch(`${process.env.REACT_APP_API_HOST}/?query=%7B%0A%20%20ping%0A%7D%0A`)
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				// console.log('myJson', JSON.stringify(myJson));
				dispatch(testApiSucceeded());
			})
			.catch(err => {
				console.log('error while testing connection to the API server', err);
				dispatch(testApiFailed());
			});
	};
};
