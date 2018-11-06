function getValidationRules(allowGraphqlIntrospection, graphqlDisableIntrospection) {
	if (!allowGraphqlIntrospection && !graphqlDisableIntrospection) return [];

	return allowGraphqlIntrospection ? [] : [graphqlDisableIntrospection];
}

module.exports = {
	getValidationRules
};
