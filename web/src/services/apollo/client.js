import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// To get current user
// import {currentUser} from './';

const currentUser = {};

const uri =
	process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : process.env.PRODUCTION_URI;

const middlewareLink = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: { authToken: currentUser().api_token ? currentUser().api_token : '' }
	});
	return forward(operation);
});

const httpLink = new createHttpLink({ uri: uri });

const link = middlewareLink.concat(httpLink);
const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache()
});

export { client };
