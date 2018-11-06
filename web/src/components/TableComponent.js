import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/components/tableComponent.css';

import downloadIcon from '../assets/images/table-download.svg';
import uploadIcon from '../assets/images/table-upload.svg';
import historyIcon from '../assets/images/table-history.svg';

const BaseClasses = getBEMClasses(['base']);
const TableClasses = getBEMClasses(['table']);

class TableComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {}

	render() {
		return (
			<div className={TableClasses('container')}>
				<div className={TableClasses('header')}>
					<div className={TableClasses('header-search')}>
						<input type="text" className={TableClasses('search-box')} placeholder="Search" />
					</div>
					<div className={TableClasses('header-buttons')}>
						<div className={TableClasses('header-button--download')}>
							<img src={downloadIcon} className={TableClasses('header-button--image')} />
						</div>
						<div className={TableClasses('header-button--upload')}>
							<img src={uploadIcon} className={TableClasses('header-button--image')} />
						</div>
						<div className={TableClasses('header-button--new')}>
							<img src={historyIcon} className={TableClasses('header-button--image')} />
						</div>
					</div>
				</div>
				<div className={TableClasses('content-header')}>
					<div className={TableClasses('table-header-column')}>
						<input type="checkbox" />
					</div>
					<div className={TableClasses('table-header-column')}>Name</div>
					<div className={TableClasses('table-header-column')}>Contact Info</div>
					<div className={TableClasses('table-header-column')}>Numberated Field</div>
					<div className={TableClasses('table-header-column')}>Other Field</div>
				</div>
				<div className={TableClasses('row')}>
					<div className={TableClasses('column')}>
						<input type="checkbox" />
					</div>
					<div className={TableClasses('column')}>Alliant Energy-Iowa</div>
					<div className={TableClasses('column')}>
						319-385-1577 Customer Service or ask for Sheryl Dorn, sdorn@accessenergycoop.com
					</div>
					<div className={TableClasses('column')}>9.4</div>
					<div className={TableClasses('column')}>Other Data</div>
				</div>
			</div>
		);
	}
}

export default TableComponent;
