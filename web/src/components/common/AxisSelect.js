import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import '../../styles/components/common/axisSelect.css';

import arrowDownIcon from '../../assets/images/icon-arrow-down.png';

const AxisSelectClasses = getBEMClasses(['axis-select']);

class AxisSelect extends React.Component {
	static defaultProps = {
		label: ''
	};

	static propTypes = {
		label: PropTypes.string
	};

	render() {
		const { label } = this.props;
		return (
			<div className={AxisSelectClasses()}>
				<div className={AxisSelectClasses('label')}>{label}</div>
				<div className={AxisSelectClasses('select-container')}>
					<select className={AxisSelectClasses('object')}>
						<option>Option 1</option>
						<option>Option 2</option>
					</select>
					<img src={arrowDownIcon} />
				</div>
			</div>
		);
	}
}

export default AxisSelect;
