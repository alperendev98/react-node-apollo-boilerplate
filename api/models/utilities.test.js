const path = require('path');
const db = require('../libs/database');
const uuid = require('uuid');
const Chance = require('chance');
const chance = new Chance();

describe('Models: Utilities', () => {
	const Utility = db.sequelize.import(path.join(__dirname, 'utilities.js'));

	beforeAll(async () => {
		await db.sequelize.sync();
	});

	test('utility Model should have only these keys', () => {
		const utilityTestKeys = [
			'id',
			'name',
			'value',
			'avoided_cost_rate',
			'metering_policy',
			'metering_type',
			'deleted',
			'contact_info',
			'address',
			'city',
			'state',
			'zipcode',
			'phone',
			'website',
			'utility_type',
			'areas_served',
			'gt_provider',
			'interconnection_policy',
			'related_documents',
			'in_utilities_list',
			'frequently_used_utility',
			'metering_dates',
			'createdAt',
			'updatedAt'
		];

		const utilityCurrentKeys = Object.keys(Utility.rawAttributes);

		const keysDifference = utilityCurrentKeys.filter(
			value => utilityTestKeys.indexOf(value) === -1
		);

		expect(keysDifference.length).toBe(0);
	});

	test('we are able to create the Utility in the table', async () => {
		const id = uuid();
		const name = chance.name();
		const newUtility = {
			id,
			name,
			value: chance.integer({ min: 1, max: 100 }),
			avoided_cost_rate: chance.floating({ min: 1, max: 10000, fixed: 4 }),
			metering_policy: chance.sentence({ length: 1000 }),
			metering_type: chance.string({ length: 29 }),
			contact_info: chance.string({ length: 299 }),
			address: chance.string({ length: 99 }),
			city: chance.string({ length: 49 }),
			state: chance.string({ length: 54 }),
			zipcode: chance.string({ length: 14 }),
			phone: chance.phone(),
			website: chance.url(),
			utility_type: chance.string({ length: 49 }),
			areas_served: chance.string({ length: 199 }),
			gt_provider: chance.string({ length: 79 }),
			interconnection_policy: chance.string({ length: 299 }),
			related_documents: chance.string({ length: 199 }),
			in_utilities_list: chance.bool(),
			frequently_used_utility: chance.bool(),
			metering_dates: [String(new Date().toISOString())]
		};

		const savedUtility = await db.utilities.create(newUtility);

		expect(savedUtility.get({ plain: true }).id).toEqual(id);

		// console.log(savedUtility.get({ plain: true }));

		await savedUtility.destroy();
	});

	afterAll(async () => {
		await db.sequelize.close();
	});
});
