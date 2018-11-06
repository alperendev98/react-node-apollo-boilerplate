import { showSideNav, hideSideNav } from './mouseActions';

describe('mouseActions TESTS', () => {
	it('showSideNav should return {type: `SHOW_SIDE_NAV`}', () => {
		expect(showSideNav().type).toBe('SHOW_SIDE_NAV');
	});

	it('hideSideNav should return {type: `HIDE_SIDE_NAV`}', () => {
		expect(hideSideNav().type).toBe('HIDE_SIDE_NAV');
	});
});
