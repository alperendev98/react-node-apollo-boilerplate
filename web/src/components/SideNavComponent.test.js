import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SideNavComponent from './SideNavComponent';

jest.mock('./SideNavComponent', () => {
	return () => <div className="side-nav__container" />;
});

const mockStore = configureStore();

describe('SideNavComponent', () => {
	const initialStore = {};
	const initialProps = {
		history: {
			push: jest.fn()
		},
		showSideNav: jest.fn(),
		hideSideNav: jest.fn()
	};
	let wrapper, component;

	beforeEach(() => {
		const store = mockStore(initialStore);
		wrapper = shallow(<SideNavComponent />);
		component = mount(<SideNavComponent {...initialProps} store={store} />);
	});

	it('renders SideNavComponent without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should render SideNavComponent with .side-nav__container class', () => {
		expect(component.find('.side-nav__container').length).toBe(1);
	});

	it('should match previos snapshot for SideNavComponent', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
