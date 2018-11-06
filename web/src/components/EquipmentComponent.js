import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import AdminLayout from '../layouts/AdminLayout';

import '../styles/components/equipmentComponent.css';

const EquipmentClasses = getBEMClasses(['equipment']);

class EquipmentComponent extends React.Component {
	render() {
		return (
			<div className={EquipmentClasses('wrapper')}>
				<div className={EquipmentClasses('container')}>
					<AdminLayout>
						<div>Admin Equipment Component</div>
					</AdminLayout>
				</div>
			</div>
		);
	}
}

export default EquipmentComponent;
