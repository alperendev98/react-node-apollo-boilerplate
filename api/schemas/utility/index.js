const path = require('path');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const mutations = require('./mutations');
const queries = require('./queries');

const typeDefs = importSchema(path.join(__dirname, 'type-defs.graphql'));

const resolvers = {
	Query: queries,
	Mutation: mutations
};

module.exports = makeExecutableSchema({
	typeDefs,
	resolvers
});
