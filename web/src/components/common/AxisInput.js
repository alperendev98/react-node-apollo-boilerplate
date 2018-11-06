import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import '../../styles/components/common/axisInput.css';

import linkIcon from '../../assets/images/icon-link.svg';

const AxisInputClasses = getBEMClasses(['axis-input']);

class AxisInput extends React.Component {
	static defaultProps = {
		label: '',
		placeholder: '',
		icon: ''
	};

	static propTypes = {
		label: PropTypes.string,
		placeholder: PropTypes.string,
		icon: PropTypes.string
	};

	render() {
		const { label, placeholder, icon } = this.props;

		let inputIcon;

		switch (icon) {
			case 'link':
				inputIcon = linkIcon;
				break;
		}

		return (
			<div className={AxisInputClasses()}>
				<div className={AxisInputClasses('label')}>{label}</div>
				<div className={AxisInputClasses('input-container')}>
					{inputIcon ? (
						<React.Fragment>
							<img src={inputIcon} />
							<input
								type="text"
								className={AxisInputClasses('object') + ' ' + AxisInputClasses('object-icon')}
								placeholder={placeholder}
							/>
						</React.Fragment>
					) : (
						<input type="text" className={AxisInputClasses('object')} placeholder={placeholder} />
					)}
				</div>
			</div>
		);
	}
}

export default AxisInput;
