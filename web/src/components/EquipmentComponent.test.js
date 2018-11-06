import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import EquipmentComponent from './EquipmentComponent';

const mockStore = configureStore();

jest.mock('../layouts/AdminLayout', () => {
	return () => <div className="admin-layout" />;
});

describe('EquipmentComponent', () => {
	const initialState = {};
	let component, wrapper, store;

	beforeEach(() => {
		store = mockStore(initialState);
		component = mount(<EquipmentComponent store={store} />, {});
		wrapper = shallow(<EquipmentComponent />);
	});

	it('shallowly renders EquipmentComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('EquipmentComponent should render AdminLayout', () => {
		expect(component.find('.admin-layout').length).toBe(1);
	});

	it('should render EquipmentComponent with .equipment__container class', () => {
		expect(component.find('.equipment__container').length).toBe(1);
	});

	it('should match previos snapshot for EquipmentComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
