import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SideBarComponent from './SideBarComponent';

const mockStore = configureStore();

describe('SideBarComponent', () => {
	const initialState = {};
	const initialProps = {
		showSideNav: jest.fn(),
		hideSideNav: jest.fn()
	};
	let component, wrapper, store;

	beforeEach(() => {
		store = mockStore(initialState);
		component = mount(<SideBarComponent {...initialProps} store={store} />, {});
		wrapper = shallow(<SideBarComponent />);
	});

	it('shallowly renders SideBarComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should render SideBarComponent with .side-bar__container class', () => {
		expect(component.find('.side-bar__container').length).toBe(1);
	});

	it('should call props.showSideNav with mouse enters manage icon', () => {
		const props = component.props();
		jest.spyOn(props, 'showSideNav');
		component.find('.side-bar__nav-item--manage').simulate('mouseenter');
		expect(props.showSideNav).toHaveBeenCalled();
	});

	it('should call props.hideSideNav when mouse leaves manage icon', () => {
		const props = component.props();
		jest.spyOn(props, 'hideSideNav');
		component.find('.side-bar__nav-item--manage').simulate('mouseenter');
		component.find('.side-bar__nav-item--manage').simulate('mouseleave');
		expect(props.hideSideNav).toHaveBeenCalled();
	});

	it('should match previos snapshot for SideBarComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
