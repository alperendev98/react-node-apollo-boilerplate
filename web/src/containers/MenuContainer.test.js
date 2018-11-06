import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import MenuContainer from './MenuContainer';

const mockStore = configureStore();

jest.mock('../components/MenuComponent', () => {
	return () => {
		return <div className="component">Content</div>;
	};
});

describe('MenuContainer', () => {
    let wrapper;
    const initialState = {};

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<MenuContainer store={store} />);
    });

    it('should render MenuContainer', () => {
        expect(wrapper.length).toEqual(1);
    });
});
