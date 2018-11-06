import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import AdminLayout from '../layouts/AdminLayout';
import TableContainer from '../containers/TableContainer';
import AddUtilityContainer from './UtilityComponents/AddUtilityContainer';

import '../styles/components/utilityComponent.css';

import addIcon from '../assets/images/icon-add.svg';

const BaseClasses = getBEMClasses(['base']);
const UtilityClasses = getBEMClasses(['utility']);

class UtilityComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {}

	render() {
		const { showAddUtilityModal } = this.props;

		return (
			<div className={UtilityClasses('wrapper')}>
				<AdminLayout>
					<div className={UtilityClasses('container')}>
						<div className={UtilityClasses('header')}>
							<div className={UtilityClasses('header-title')}>Utillity Management</div>
							<div className={UtilityClasses('header-buttons')}>
								<div onClick={showAddUtilityModal} className={UtilityClasses('header-button--add')}>
									<div className={UtilityClasses('button-icon-label')}>Add Utility</div>
									<img src={addIcon} className={BaseClasses('icon')} />
								</div>
							</div>
						</div>
						<div className={UtilityClasses('content')}>
							<TableContainer />
						</div>
					</div>
				</AdminLayout>
				<AddUtilityContainer />
			</div>
		);
	}
}

export default UtilityComponent;
