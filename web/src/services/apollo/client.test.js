import { ApolloClient } from 'apollo-client';
import { client } from './client';

describe('startupMiddleware TESTS', () => {
	it('should confirm that exported client is AppolloClient class', () => {
		expect(client).toBeInstanceOf(ApolloClient);
	});
});
