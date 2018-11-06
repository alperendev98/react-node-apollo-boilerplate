const graphqlDisableIntrospection = require('graphql-disable-introspection');
const helpers = require('./helpers');

describe('Test helpers functions', () => {
	describe('Testing  getValidationRules function', () => {
		test('getValidationRules should return [] when `graphqlDisableIntrospection` is not passed', () => {
			expect(helpers.getValidationRules(false)).toEqual([]);
			expect(helpers.getValidationRules(true)).toEqual([]);
		});

		test(`getValidationRules should return 
    [ graphqlDisableIntrospection ] when allowGraphqlIntrospection is 
    'false' and graphqlDisableIntrospection is passed`, () => {
			expect(helpers.getValidationRules(false, graphqlDisableIntrospection)).toEqual(
				expect.arrayContaining([graphqlDisableIntrospection])
			);
		});
	});
});
