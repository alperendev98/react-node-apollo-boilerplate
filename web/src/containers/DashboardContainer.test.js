import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import DashboardContainer from './DashboardContainer';

describe('DashboardContainer.js TESTS', () => {
	let wrapper, store;

	beforeEach(() => {
		const mockStore = configureMockStore();
		store = mockStore({ randomProp: 1 });
		wrapper = shallow(<DashboardContainer store={store} />);
	});

	it('renders DashboardContainer without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should show passed prop', () => {
		// test that the state values were correctly passed as props
		expect(wrapper.props().randomProp).toBe(1);
	});
});
