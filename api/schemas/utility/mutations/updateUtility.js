const db = require('../../../libs/database');
const handleError = require('../../../libs/handleError');

const updateUtility = async (_, { id, ...args }) => {
	try {
		if (Object.keys(args).length === 0) {
			throw new Error('Please select a field to update');
		}
		await db.utilities.update(args, { where: { id } });

		return db.utilities.findOne({ where: { id } });
	} catch (error) {
		return handleError(error);
	}
};

module.exports = updateUtility;
