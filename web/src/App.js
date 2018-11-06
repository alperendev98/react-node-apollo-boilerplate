import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import history from './helpers/history';
import LogInContainer from './containers/LogInContainer';
import DashboardContainer from './containers/DashboardContainer';

import './App.css';

class App extends Component {
	render() {
		return (
			<div id="app-root" className="App">
				<Router history={history}>
					<Switch>
						<Route path="/login" component={LogInContainer} />
						<Route path="/admin" component={DashboardContainer} />
						<Redirect to="/login" />
					</Switch>
				</Router>
				<div id="modal" />
			</div>
		);
	}
}

export default App;
