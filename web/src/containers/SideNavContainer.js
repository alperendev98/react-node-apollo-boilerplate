import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNavComponent from '../components/SideNavComponent';

import { showSideNav, hideSideNav } from '../redux/actions/mouseActions';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	showSideNav,
	hideSideNav
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SideNavComponent));
