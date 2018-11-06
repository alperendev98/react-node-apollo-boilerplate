import { processModifiers } from './utils';

describe('utils TESTS', () => {
	describe('processModifiers tests', () => {
		it('should return object when passed object', () => {
			expect(processModifiers({ foo: 'bar' })).toEqual(expect.objectContaining({ foo: 'bar' }));
		});

		it('should return the passed paramater when anything except real object', () => {
			expect(processModifiers(1)).toEqual(1);
			expect(processModifiers('string')).toEqual('string');
			expect(processModifiers(['array'])).toEqual(expect.arrayContaining(['array']));
			expect(processModifiers(undefined)).toEqual(undefined);
			expect(processModifiers(null)).toEqual(null);
		});
	});
});
