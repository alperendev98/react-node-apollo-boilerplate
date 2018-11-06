import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import logoIcon from '../assets/images/logo.svg';
import invoiceIcon from '../assets/images/icon-invoice.svg';
import mailIcon from '../assets/images/icon-mail.svg';
import settingIcon from '../assets/images/icon-settings.svg';
import speedIcon from '../assets/images/icon-speed.svg';
import targetIcon from '../assets/images/icon-target.svg';

import '../styles/base/base.css';
import '../styles/components/sidebarComponent.css';

const BaseClasses = getBEMClasses(['base']);
const SideBarClasses = getBEMClasses(['side-bar']);

class SideBarComponent extends React.Component {
	render() {
		const { showSideNav, hideSideNav } = this.props;

		return (
			<div className={SideBarClasses('container')}>
				<div className={SideBarClasses('logo')}>
					<img className={SideBarClasses('logo-icon')} src={logoIcon} />
				</div>
				<div className={SideBarClasses('nav')}>
					<div className={SideBarClasses('nav-item')}>
						<img className={SideBarClasses('nav-item-icon')} src={invoiceIcon} />
					</div>
					<div
						onMouseEnter={showSideNav}
						onMouseLeave={hideSideNav}
						className={SideBarClasses('nav-item', 'manage')}
					>
						<img className={SideBarClasses('nav-item-icon')} src={speedIcon} />
					</div>
					<div className={SideBarClasses('nav-item')}>
						<img className={SideBarClasses('nav-item-icon')} src={targetIcon} />
					</div>
					<div className={SideBarClasses('nav-item')}>
						<img className={SideBarClasses('nav-item-icon')} src={mailIcon} />
					</div>
					<div className={SideBarClasses('nav-item')}>
						<img className={SideBarClasses('nav-item-icon')} src={settingIcon} />
					</div>
				</div>
			</div>
		);
	}
}

export default SideBarComponent;
