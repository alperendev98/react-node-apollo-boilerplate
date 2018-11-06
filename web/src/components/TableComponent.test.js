import React from 'react';
import { mount, shallow } from 'enzyme';
import TableComponent from './TableComponent';

describe('TableComponent', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<TableComponent />);
	});

	it('shallowly renders TableComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should match previos snapshot for TableComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
