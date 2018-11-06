const app = require('./app');
const config = require('config');
const db = require('./libs/database');
const logger = require('./libs/logger');

const port = config.get('server.port');
const host = config.get('server.host');

db.sequelize
	.sync()
	.then(() => {
		// prettier-ignore
		require('./libs/bootstrap'); // eslint-disable-line global-require

		logger.info(
			`Connection has been established successfully with database ${config.get('database.name')}.`
		);

		app.listen(port, host, () => {
			logger.info(`GraphQL server started at  ${host}:${port}`);
		});
	})
	.catch(async err => {
		logger.error('Unable to connect to the database:', err);
	});
