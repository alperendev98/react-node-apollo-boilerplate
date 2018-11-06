import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import 'typeface-poppins';
import 'typeface-nunito-sans';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { client } from './services/apollo/client';
import store from './redux/store';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
