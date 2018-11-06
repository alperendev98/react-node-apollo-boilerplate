import React from 'react';
import { shallow } from 'enzyme';

import AddUtilityComponent from './AddUtilityComponent';

describe('AddUtilityComponent TESTS', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<AddUtilityComponent />);
	});

	it('renders AddUtilityComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should match previos snapshot for AddUtilityComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
