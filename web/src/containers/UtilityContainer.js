import { connect } from 'react-redux';
import UtilityComponent from '../components/UtilityComponent';

import { showAddUtilityModal, hideAddUtilityModal } from '../redux/actions/modalActions';

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
	showAddUtilityModal,
	hideAddUtilityModal
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UtilityComponent);
