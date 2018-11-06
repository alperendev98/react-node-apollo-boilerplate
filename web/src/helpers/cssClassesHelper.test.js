import { addModifier } from './cssClassesHelper';

describe('cssClassesHelper.js TESTS', () => {
	describe('addModifiers TESTS', () => {
		it('should return array when passed array and array', () => {
			expect(addModifier(['some'], ['array'])).toEqual(expect.arrayContaining([['array'], 'some']));
		});

		it('should return array when passed array and string', () => {
			expect(addModifier('some', 'string')).toEqual(expect.arrayContaining(['string', 'some']));
		});

		it('ashould return object when passed object and string', () => {
			expect(addModifier({ foo: 'bar' }, 'string')).toEqual(
				expect.objectContaining({ foo: 'bar', string: true })
			);
		});

		it('ashould return undefined when passed something except array, object or string', () => {
			expect(addModifier(1)).toEqual(undefined);
		});
	});
});
