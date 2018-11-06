import { loadStartupData, startupDataLoaded } from './appActions';

describe('appActions TESTS', () => {
	it('loadStartupData should return {type: `LOAD_STARTUP_DATA`}', () => {
		expect(loadStartupData().type).toBe('LOAD_STARTUP_DATA');
	});

	it('startupDataLoaded should return {type: `STARTUP_DATA_LOADED`}', () => {
		expect(startupDataLoaded().type).toBe('STARTUP_DATA_LOADED');
	});
});
