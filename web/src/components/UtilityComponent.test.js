import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import UtilityComponent from './UtilityComponent';

const mockStore = configureStore();

jest.mock('../layouts/AdminLayout', () => {
	return () => <div className="admin-layout" />;
});

jest.mock('./UtilityComponents/AddUtilityContainer', () => {
	return () => <div className="add-utility" />;
});

describe('UtilityComponent', () => {
	const initialState = {};
	let component, wrapper, store;

	beforeEach(() => {
		store = mockStore(initialState);
		component = mount(<UtilityComponent store={store} />, {});
		wrapper = shallow(<UtilityComponent />);
	});

	it('shallowly renders UtilityComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('UtilityComponent should render AdminLayout', () => {
		expect(component.find('.admin-layout').length).toBe(1);
	});

	it('should match previos snapshot for UtilityComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
