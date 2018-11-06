import React from 'react';
import { shallow } from 'enzyme';

import AxisDatePicker from './AxisDatePicker';

describe('AxisDatePicker TESTS', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<AxisDatePicker />);
	});

	it('renders AxisDatePicker without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});
});
