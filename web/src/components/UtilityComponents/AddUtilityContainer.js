import { connect } from 'react-redux';
import AddUtilityComponent from './AddUtilityComponent';
import { hideAddUtilityModal } from '../../redux/actions/modalActions';

const mapStateToProps = state => {
	const { isAddUtilityModalOpen } = state.modalReducer;
	return {
		isAddUtilityModalOpen
	};
};

const mapDispatchToProps = {
	hideAddUtilityModal
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddUtilityComponent);
