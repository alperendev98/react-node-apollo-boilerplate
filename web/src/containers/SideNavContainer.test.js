import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import SideNavContainer from './SideNavContainer';

const mockStore = configureStore();

jest.mock('../components/SideNavComponent', () => {
	return () => {
		return <div className="component">Content</div>;
	};
});

describe('SideNavContainer', () => {
	const initialState = {};
	const history = {};

	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = mount(
			<Router>
				<SideNavContainer store={store} />
			</Router>
		);
	});

	it('should render SideNavContainer', () => {
		expect(container.length).toEqual(1);
	});
});
