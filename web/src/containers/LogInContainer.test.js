import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import LogInContainer from './LogInContainer';

describe('LogInContainer.js TESTS', () => {
	let wrapper, store;

	beforeEach(() => {
		const mockStore = configureMockStore();
		store = mockStore({ randomProp: 1 });
		wrapper = shallow(<LogInContainer store={store} />);
	});

	it('renders LogInContainer without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should show passed prop', () => {
		// test that the state values were correctly passed as props
		expect(wrapper.props().randomProp).toBe(1);
	});
});
