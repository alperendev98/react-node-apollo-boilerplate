import React from 'react';
import { connect } from 'react-redux';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import HeaderContainer from '../containers/HeaderContainer';
import SideBarContainer from '../containers/SideBarContainer';
import SideNavContainer from '../containers/SideNavContainer';

import '../styles/layouts/adminLayout.css';

const BaseClasses = getBEMClasses(['base']);
const AdminLayoutClasses = getBEMClasses(['admin-layout']);

class AdminLayout extends React.Component {
	render() {
		const { showSideNav, children } = this.props;

		return (
			<div className={AdminLayoutClasses('wrapper')}>
				<div className={AdminLayoutClasses('container')}>
					<div className={AdminLayoutClasses('header')}>
						<HeaderContainer />
					</div>
					<div className={AdminLayoutClasses('sidebar')}>
						<SideBarContainer />
					</div>
					{showSideNav && (
						<div className={AdminLayoutClasses('sidenav')}>
							<SideNavContainer />
						</div>
					)}
					<div className={AdminLayoutClasses('content')}>{children}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { showSideNav } = state.mouseReducer;

	return {
		showSideNav
	};
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminLayout);
