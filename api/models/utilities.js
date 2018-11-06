const utilities = (sequelize, DataTypes) =>
	sequelize.define('utilities', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true
		},
		name: DataTypes.STRING,
		value: DataTypes.FLOAT(4),
		avoided_cost_rate: DataTypes.FLOAT(4),
		metering_policy: DataTypes.STRING(2000),
		metering_type: DataTypes.STRING(30),
		contact_info: DataTypes.STRING(300),
		address: DataTypes.STRING(100),
		city: DataTypes.STRING(50),
		state: DataTypes.STRING(55),
		zipcode: DataTypes.STRING(15),
		phone: DataTypes.STRING(30),
		website: DataTypes.STRING(300),
		utility_type: DataTypes.STRING(50),
		areas_served: DataTypes.STRING(200),
		gt_provider: DataTypes.STRING(80),
		interconnection_policy: DataTypes.STRING(300),
		related_documents: DataTypes.STRING(200),
		in_utilities_list: DataTypes.BOOLEAN,
		frequently_used_utility: DataTypes.BOOLEAN,
		metering_dates: DataTypes.ARRAY(DataTypes.DATE)
	});

module.exports = utilities;
