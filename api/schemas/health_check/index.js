const path = require('path');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const queries = require('./queries');

const typeDefs = importSchema(path.join(__dirname, 'type-defs.graphql'));

const resolvers = {
	Query: queries
};

module.exports = makeExecutableSchema({
	typeDefs,
	resolvers
});
