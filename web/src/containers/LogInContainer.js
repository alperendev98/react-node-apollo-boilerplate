import { connect } from 'react-redux';
import { testApiConnection } from '../redux/actions/authActions';
import LogInComponent from '../components/LogInComponent';

const mapStateToProps = state => ({
	randomProp: state.randomProp
});

const mapDispatchToProps = {
	testApiConnection
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogInComponent);
