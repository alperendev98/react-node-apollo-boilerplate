import React from 'react';
import { shallow, mount } from 'enzyme';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import LogInComponent from './LogInComponent';

describe('LogInComponent.js TESTS', () => {
	const props = { history: { push: jest.fn() }, testApiConnection: jest.fn() };
	let wrapper, component;

	beforeEach(() => {
		wrapper = shallow(<LogInComponent {...props} />);
		component = mount(<LogInComponent {...props} />, {});
	});

	it('renders LogInComponent without crashing', () => {
		expect(component.length).toEqual(1);
	});

	it('renders LogInComponent with .login__container class', () => {
		expect(component.find('.login__container').length).toBe(1);
	});

	it('checks the onClick when LogIn is clicked', () => {
		const instance = component.instance();
		jest.spyOn(instance, 'doLogin');

		instance.doLogin();
		expect(instance.doLogin).toHaveBeenCalled();
	});

	it('should match previos snapshot for LogInComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
