import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });
if (global.document)
	document.createRange = () => ({
		setStart: () => {},
		setEnd: () => {},
		commonAncestorContainer: {
			nodeName: 'BODY',
			ownerDocument: document
		}
	});
expect.extend({
	toBeString(received) {
		const isString = typeof received === 'string' || received instanceof String;
		return isString
			? {
					message: () => `expected ${received} to be string`,
					pass: true
			  }
			: {
					message: () => `expected ${received} to be string`,
					pass: false
			  };
	}
});
