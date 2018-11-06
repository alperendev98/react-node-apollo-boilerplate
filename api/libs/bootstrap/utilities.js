const utiltiesV1Data = require('../../oldDbTestData/utilities.json').data;
const db = require('../database');
const uuid = require('uuid/v4');

module.exports = async () =>
	db.utilities.bulkCreate(
		utiltiesV1Data.map(utility => {
			const updatedUtility = utility;
			updatedUtility.id = uuid();
			updatedUtility.avoided_cost_rate = utility.Avoided_Cost_Rate;
			updatedUtility.metering_policy = utility.Metering_Policy;
			updatedUtility.metering_type = utility.Metering_Type;
			updatedUtility.billing_type = utility.Billing_Type;
			updatedUtility.frequently_used_utility = utility.frequenty_used_utility;
			delete updatedUtility.frequenty_used_utility;
			delete updatedUtility.Billing_Type;
			delete updatedUtility.Metering_Type;
			delete updatedUtility.Metering_Policy;
			delete updatedUtility.Avoided_Cost_Rate;
			delete updatedUtility.__v;

			return updatedUtility;
		})
	);
