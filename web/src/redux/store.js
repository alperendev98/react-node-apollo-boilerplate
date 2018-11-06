import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';
import authReducer from './reducers/authReducer';
import mouseReducer from './reducers/mouseReducer';
import modalReducer from './reducers/modalReducer';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const rootReducer = combineReducers({
	appReducer,
	authReducer,
	mouseReducer,
	modalReducer
});

const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));

export default store;
