import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import EquipmentContainer from './EquipmentContainer';

const mockStore = configureStore();

jest.mock('../components/EquipmentComponent', () => {
	return () => {
		return <div className="component">Content</div>;
	};
});

describe('EquipmentContainer', () => {
	const initialState = {};

	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = mount(<EquipmentContainer store={store} />);
	});

	it('should render EquipmentComponent', () => {
		expect(container.find('.component').length).toBe(1);
	});
});
