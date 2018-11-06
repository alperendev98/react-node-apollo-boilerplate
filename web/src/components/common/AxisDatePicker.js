import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/components/common/axisDatePicker.css';

import calendarIcon from '../../assets/images/icon-calendar.svg';

const AxisDatePickerClasses = getBEMClasses(['axis-date-picker']);

class AxisDatePicker extends React.Component {
	static defaultProps = {
		label: ''
	};

	static propTypes = {
		label: PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = {
			date: new moment()
		};
	}

	onChange = date => {
		this.setState({
			date
		});
	};

	render() {
		const { label } = this.props;

		return (
			<div className={AxisDatePickerClasses()}>
				<div className={AxisDatePickerClasses('label')}>{label}</div>
				<div className={AxisDatePickerClasses('input-container')}>
					<DatePicker selected={this.state.date} onChange={this.onChange} />
					<img src={calendarIcon} />
				</div>
			</div>
		);
	}
}

export default AxisDatePicker;
