import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import SideBarContainer from './SideBarContainer';

const mockStore = configureStore();

jest.mock('../components/SideBarComponent', () => {
	return () => {
		return <div className="component">Content</div>;
	};
});

describe('SideBarContainer', () => {
	const initialState = {
		mouseReducer: {
			showSideNav: jest.fn()
		}
	};

	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = mount(<SideBarContainer store={store} />);
	});

	it('should render SideBarContainer', () => {
		expect(container.length).toEqual(1);
	});
});
