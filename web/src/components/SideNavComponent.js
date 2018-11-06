import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import logoIcon from '../assets/images/logo.svg';
import '../styles/base/base.css';
import '../styles/components/sidenavComponent.css';

const BaseClasses = getBEMClasses(['base']);
const SideNavClasses = getBEMClasses(['side-nav']);

class SideNavComponent extends React.Component {
	navigateTo(route) {
		const { history } = this.props;

		history.push(route);
	}

	render() {
		const { showSideNav, hideSideNav } = this.props;

		// TO DO: test mouseenter and mouseleave events
		return (
			<div
				onMouseEnter={showSideNav}
				onMouseLeave={hideSideNav}
				className={SideNavClasses('container')}
			>
				<div className={SideNavClasses('title')}>Manage</div>
				<div className={SideNavClasses('item')}>Database</div>
				{/* TODO: write tests for onClick */}
				<div
					onClick={() => this.navigateTo('/admin/equipment')}
					className={SideNavClasses('sub-item', 'equipment')}
				>
					Equipment
				</div>
				<div
					onClick={() => this.navigateTo('/admin/utilities')}
					className={SideNavClasses('sub-item', 'utilities')}
				>
					Utilities
				</div>
				<div className={SideNavClasses('item')}>Proposals</div>
				<div className={SideNavClasses('sub-item')}>Contingencies</div>
				<div className={SideNavClasses('sub-item')}>Cost Per Watt</div>
				<div className={SideNavClasses('sub-item')}>Sales Tax</div>
				<div className={SideNavClasses('sub-item')}>Tax Credits</div>
				<div className={SideNavClasses('sub-item')}>Tax Bracket</div>
				<div className={SideNavClasses('sub-item')}>Depreciation Schedules</div>
				<div className={SideNavClasses('sub-item')}>Production Offsets</div>
				<div className={SideNavClasses('sub-item')}>Irradiance</div>
				<div className={SideNavClasses('sub-item')}>Templates</div>
				<div className={SideNavClasses('item')}>Finance</div>
				<div className={SideNavClasses('sub-item')}>PPA's</div>
				<div className={SideNavClasses('sub-item')}>Financing</div>
				<div className={SideNavClasses('item')}>Post Sale</div>
				<div className={SideNavClasses('sub-item')}>Project Stage</div>
			</div>
		);
	}
}

export default SideNavComponent;
