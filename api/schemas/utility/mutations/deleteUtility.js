const db = require('../../../libs/database');
const handleError = require('../../../libs/handleError');

const deleteUtility = async (_, { id }) => {
	try {
		const response = await db.utilities.destroy({ where: { id } });
		if (response === 0) {
			throw new Error('Invalid Utility ID.');
		}

		return response;
	} catch (error) {
		return handleError(error);
	}
};

module.exports = deleteUtility;
