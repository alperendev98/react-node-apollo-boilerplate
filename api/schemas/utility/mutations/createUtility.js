const db = require('../../../libs/database');
const handleError = require('../../../libs/handleError');

const createUtility = async (_, args) => {
	try {
		return db.utilities.create(args);
	} catch (error) {
		return handleError(error);
	}
};

module.exports = createUtility;
