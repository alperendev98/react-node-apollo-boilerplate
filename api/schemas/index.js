const { mergeSchemas } = require('graphql-tools');
const utilitySchema = require('./utility');
const healthCheckSchema = require('./health_check');

module.exports = mergeSchemas({
	schemas: [utilitySchema, healthCheckSchema]
});
