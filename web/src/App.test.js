import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App.js TESTS', () => {
	it('renders App without crashing', () => {
		shallow(<App />);
	});
});
