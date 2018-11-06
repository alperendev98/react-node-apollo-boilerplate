import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import '../../styles/components/common/axisCheckBox.css';

const AxisCheckBoxClasses = getBEMClasses(['axis-check']);

class AxisCheckBox extends React.Component {
	static defaultProps = {
		label: '',
		objectId: ''
	};

	static propTypes = {
		label: PropTypes.string,
		objectId: PropTypes.string
	};

	render() {
		const objectId = this.props.objectId || 'id_checkbox';
		const { label } = this.props;

		return (
			<div className={AxisCheckBoxClasses()}>
				<div className={AxisCheckBoxClasses('input-container')}>
					<input type="checkbox" className={AxisCheckBoxClasses('object')} id={objectId} />
					<label for={objectId} className={AxisCheckBoxClasses('label')}>
						{label}
					</label>
				</div>
			</div>
		);
	}
}

export default AxisCheckBox;
