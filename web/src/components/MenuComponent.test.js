import React from 'react';
import { shallow, mount } from 'enzyme';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import MenuComponent from './MenuComponent';

describe('MenuComponent.js TESTS', () => {
	const props = { history: { push: jest.fn() } };
	let wrapper, component;

	beforeEach(() => {
		wrapper = shallow(<MenuComponent />);
		component = mount(<MenuComponent {...props} />, {});
	});

	it('renders MenuComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should match previos snapshot for MenuComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('checks the onClick when menu is clicked', () => {
		const instance = component.instance();
		jest.spyOn(instance, 'handleToggle');

		instance.handleToggle();
		expect(instance.handleToggle).toHaveBeenCalled();
	});

	it('checks close menu on outside click', () => {
		const instance = component.instance();
		jest.spyOn(instance, 'handleClose');

		instance.handleClose();
		expect(instance.handleClose).toHaveBeenCalled();
	});

});
