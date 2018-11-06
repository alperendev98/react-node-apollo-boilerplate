import { connect } from 'react-redux';
import DashboardComponent from '../components/DashboardComponent';

const mapStateToProps = state => ({
	randomProp: state.randomProp
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DashboardComponent);
