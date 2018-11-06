import { connect } from 'react-redux';
import SideBarComponent from '../components/SideBarComponent';

import { showSideNav, hideSideNav } from '../redux/actions/mouseActions';

const mapStateToProps = state => {
	const { showSideNav } = state.mouseReducer;

	return {
		showSideNav
	};
};

const mapDispatchToProps = {
	showSideNav,
	hideSideNav
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SideBarComponent);
