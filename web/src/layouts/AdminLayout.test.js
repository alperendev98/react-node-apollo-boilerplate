import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import AdminLayout from './AdminLayout';

const mockStore = configureStore();

describe('SideBarContainer', () => {
	const initialState = {
		mouseReducer: {
			showSideNav: jest.fn()
		}
	};

	let store, wrapper;

	beforeEach(() => {
		store = mockStore(initialState);
		wrapper = shallow(<AdminLayout store={store} />);
	});

	it('should render AdminLayout', () => {
		expect(wrapper.length).toEqual(1);
	});
});
