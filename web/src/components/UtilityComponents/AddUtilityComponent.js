import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import Modal from 'react-modal';

import AxisInput from '../common/AxisInput';
import AxisCheckBox from '../common/AxisCheckBox';
import AxisSelect from '../common/AxisSelect';
import AxisDatePicker from '../common/AxisDatePicker';

import '../../styles/components/addUtilityComponent.css';
import '../../styles/components/common/modal.css';

const BaseClasses = getBEMClasses(['base']);
const ModalClasses = getBEMClasses(['modal']);
const AddUtilityClasses = getBEMClasses(['add-utility']);

class AddUtilityComponent extends React.Component {
	static defaultProps = {
		isAddUtilityModalOpen: false
	};

	static propTypes = {
		isAddUtilityModalOpen: PropTypes.bool
	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		Modal.setAppElement('body');
	}

	render() {
		const { isAddUtilityModalOpen, hideAddUtilityModal } = this.props;
		return (
			<React.Fragment>
				<Modal isOpen={isAddUtilityModalOpen} className={AddUtilityClasses('container')}>
					<div className={ModalClasses('title')}>Add Utility</div>
					<div className={ModalClasses('content')}>
						<div className={AddUtilityClasses('row')}>
							<AxisInput label="Utility Name" placeholder="Utility Name" />
						</div>
						<div className={AddUtilityClasses('row')}>
							<AxisSelect label="Metering Type" placeholder="Select Type" />
							<AxisInput label="Average General Service Rate" placeholder="Type Average" />
						</div>
						<div className={AddUtilityClasses('half-row')}>
							<AxisDatePicker label="Metering Type" placeholder="MM/DD/YYYY" />
						</div>
						<div className={AddUtilityClasses('row')}>
							<AxisInput
								label="Other Details Regarding Metering Policy"
								placeholder="Other Details"
							/>
							<AxisInput label="Contact Info" placeholder="Contact Info" />
						</div>
						<div className={AddUtilityClasses('row')}>
							<AxisSelect label="Utility Type" placeholder="Select Utility Type" />
							<AxisInput label="Areas Served" placeholder="Areas" />
						</div>
						<div className={AddUtilityClasses('row')}>
							<AxisInput label="G&T Provider" placeholder="G&T Provider" />
							<AxisInput label="Interconnection Policy" placeholder="Interconnection Policy" />
						</div>
						<div className={AddUtilityClasses('row')}>
							<AxisInput label="Related Documents" placeholder="Document Link" icon="link" />
						</div>
						<div className={AddUtilityClasses('row')}>
							<AxisCheckBox label="Display in utilities list on lead capture form" />
						</div>
					</div>
					<div className={ModalClasses('footer')}>
						<div
							onClick={hideAddUtilityModal}
							className={ModalClasses('btn') + ' ' + ModalClasses('btn-cancel')}
						>
							Cancel
						</div>
						<div className={ModalClasses('btn') + ' ' + ModalClasses('btn-save')}>Save Utility</div>
					</div>
				</Modal>
			</React.Fragment>
		);
	}
}

export default AddUtilityComponent;
