import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, resetErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (str) => dispatch(openModal(str)),
    resetErrors: () => dispatch(resetErrors())
});


export default connect(mSTP, mDTP)(Greeting);