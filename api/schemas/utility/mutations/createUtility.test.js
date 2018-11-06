const chance = require('chance').Chance();
const uuid = require('uuid/v4');
const db = require('../../../libs/database');
const schema = require('../index');
const { graphql } = require('graphql');

describe('Mutation: createUtility', () => {
	beforeAll(async () => {
		await db.sequelize.sync();
	});

	beforeEach(async () => {
		await db.utilities.destroy({ where: {} });
	});

	test('should create utility successfully when request has all valid parameters.', async () => {
		const id = uuid();
		const name = chance.name();
		const query = `mutation {
			createUtility(
				id: "${id}",
				name: "${name}",
				value: ${chance.integer({ min: 1, max: 100 })},
				avoided_cost_rate: ${chance.floating({ min: 1, max: 10000, fixed: 4 })},
				metering_policy: "${chance.sentence({ length: 1000 })}",
				metering_type: "${chance.string({ length: 29 })}",
				contact_info: "${chance.string({ length: 299 })}",
				address: "${chance.string({ length: 99 })}",
				city: "${chance.string({ length: 49 })}",
				state: "${chance.string({ length: 54 })}",
				zipcode: "${chance.string({ length: 14 })}",
				phone: "${chance.phone()}",
				website: "${chance.url()}",
				utility_type: "${chance.string({ length: 49 })}",
				areas_served: "${chance.string({ length: 199 })}",
				gt_provider: "${chance.string({ length: 79 })}",
				interconnection_policy: "${chance.string({ length: 299 })}",
				related_documents: "${chance.string({ length: 199 })}",
				in_utilities_list: ${chance.bool()},
				frequently_used_utility: ${chance.bool()},
				metering_dates: ["${String(new Date().toISOString())}"]
			){
				id
				name
			}
		}`;
		const response = await graphql(schema, query, {}, {});

		expect(response.data.createUtility.id).toBe(id);
		expect(response.data.createUtility.name).toBe(name);
	});

	afterAll(async () => {
		await db.utilities.destroy({ where: {} });
		await db.sequelize.close();
	});
});
