import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import UtilityContainer from './UtilityContainer';

const mockStore = configureStore();

jest.mock('../components/UtilityComponent', () => {
	return () => {
		return <div className="component">Content</div>;
	};
});

describe('UtilityContainer', () => {
	const initialState = {};

	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = mount(<UtilityContainer store={store} />);
	});

	it('should pass xxx to component', () => {});

	it('should render UtilityComponent', () => {
		expect(container.find('.component').length).toBe(1);
	});
});
