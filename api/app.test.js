const request = require('supertest');
const app = require('./app');
const uuid = require('uuid/v4');

describe('Test the root path', async () => {
	test('It should return 200 to the GET "/" method', async () => {
		await request(app)
			.get('/')
			.send({ query: `{ utility ( id: "${uuid()}" ) { id } }` })
			.expect(200);
	});
});
