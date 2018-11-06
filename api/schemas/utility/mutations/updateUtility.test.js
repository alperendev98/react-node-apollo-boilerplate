const chance = require('chance').Chance();
const uuid = require('uuid/v4');
const db = require('../../../libs/database');
const schema = require('../index');
const { graphql } = require('graphql');

describe('Mutation: updateUtility', () => {
	let utilityToUpdate = {};
	const oldName = chance.name();

	beforeAll(async () => {
		await db.sequelize.sync();
	});

	beforeEach(async () => {
		await db.utilities.destroy({ where: {} });
		const query = `mutation {
			createUtility(
				id: "${uuid()}",
				name: "${oldName}",
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
			}
		}`;

		utilityToUpdate = (await graphql(schema, query, {}, {})).data.createUtility;
	});

	test('should update utility name when provided valid params', async () => {
		const newName = chance.name();
		const query = `mutation {
			updateUtility(
				id: "${utilityToUpdate.id}",
				name: "${newName}"
			){
				id
				name
			}
		}`;
		return expect(graphql(schema, query, {}, {})).resolves;
	});

	test('should throw error if invalid id is provided', async () => {
		const newName = chance.name();
		const query = `mutation {
			updateUtility(
				id: "${utilityToUpdate.id}"
			){
				id
				name
			}
		}`;
		await expect(graphql(schema, query, {}, {})).rejects;
	});

	afterAll(async () => {
		await db.utilities.destroy({ where: {} });
		await db.sequelize.close();
	});
});
