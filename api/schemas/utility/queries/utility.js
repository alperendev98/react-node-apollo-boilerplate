const db = require('../../../libs/database');
const handleError = require('../../../libs/handleError');

const getUtility = async (_, { id }) =>
	db.utilities
		.findOne({
			where: {
				id
			}
		})
		.catch(handleError);

module.exports = getUtility;
