import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import HeaderContainer from './HeaderContainer';

const mockStore = configureStore();

jest.mock('../components/HeaderComponent', () => {
	return () => {
		return <div className="component">Content</div>;
	};
});

describe('HeaderContainer', () => {
	const initialState = {};

	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = mount(<HeaderContainer store={store} />);
	});

	it('should render HeaderContainer', () => {
		expect(container.find('.component').length).toBe(1);
	});
});
