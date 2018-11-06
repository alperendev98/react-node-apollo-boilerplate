import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import HeaderComponent from './HeaderComponent';

const mockStore = configureStore();

describe('HeaderComponent', () => {
	const initialState = {};

	let store, component, wrapper;

	beforeEach(() => {
		store = mockStore(initialState);
		component = mount(<HeaderComponent store={store} />, {});
		wrapper = shallow(<HeaderComponent />);
	});

	it('shallowly renders EquipmentComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should render HeaderComponent with .header__container class', () => {
		expect(component.find('.header__container').length).toBe(1);
	});

	it('should match previos snapshot for HeaderComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
