import React from 'react';
import { shallow } from 'enzyme';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import DashboardComponent from './DashboardComponent';

describe('DashboardComponent.js TESTS', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<DashboardComponent />);
	});

	it('renders DashboardComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should match previos snapshot for DashboardComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
