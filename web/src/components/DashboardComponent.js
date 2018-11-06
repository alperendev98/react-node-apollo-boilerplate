import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import UtilityContainer from '../containers/UtilityContainer';
import EquipmentContainer from '../containers/EquipmentContainer';

import '../styles/components/dashboardComponent.css';

class DashboardComponent extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path="/admin/utilities" component={UtilityContainer} />
					<Route path="/admin/equipment" component={EquipmentContainer} />
					<Redirect to="/admin/utilities" />
				</Switch>
			</React.Fragment>
		);
	}
}

export default DashboardComponent;
