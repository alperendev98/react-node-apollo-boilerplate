const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config').get('server');
const expressGraphQL = require('express-graphql');
const graphqlDisableIntrospection = require('graphql-disable-introspection');

const graphqlSchema = require('./schemas');
const { getValidationRules } = require('./utils/helpers');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: config.get('corsWhitelist').map(x => new RegExp(x)) }));
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.use(
	'/',
	bodyParser.json(),
	expressGraphQL(() => {
		return {
			schema: graphqlSchema,
			validationRules: getValidationRules(
				config.get('allowGraphqlIntrospection'),
				graphqlDisableIntrospection
			),
			graphiql: config.get('allowGraphqlIntrospection')
		};
	})
);

module.exports = app;
