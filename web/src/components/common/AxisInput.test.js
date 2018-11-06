import React from 'react';
import { shallow, mount } from 'enzyme';

import AxisInput from './AxisInput';

describe('AxisInput TESTS', () => {
	let wrapper, component;

	beforeEach(() => {
		wrapper = shallow(<AxisInput />);
		component = mount(<AxisInput icon='link' />);
	});

	it('renders AxisInput without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('renders AxisInput without crashing with icon passed', () => {
		expect(component.length).toEqual(1);
	});
});
