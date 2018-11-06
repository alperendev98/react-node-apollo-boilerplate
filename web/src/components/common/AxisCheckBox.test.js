import React from 'react';
import { shallow } from 'enzyme';

import AxisCheckBox from './AxisCheckBox';

describe('AxisCheckbox TESTS', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<AxisCheckBox />);
	});

	it('renders AxisCheckBox without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});
});
