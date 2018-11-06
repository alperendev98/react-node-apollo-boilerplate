import React from 'react';
import { shallow } from 'enzyme';

import AxisSelect from './AxisSelect';

describe('AxisSelect TESTS', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<AxisSelect />);
	});

	it('renders AxisSelect without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});
});
