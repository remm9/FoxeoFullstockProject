import { connect } from 'react-redux';
import Splash from './splash'
import { openModal } from '../../actions/modal_actions';
import { signup } from './../../actions/session_actions'

const mSTP = ({ session }) => ({
    currentUser: session.currentUser,
});

const mDTP = dispatch => ({
    // newUserSignup: () => dispatch(openModal('signup'))
    openModal: (str) => dispatch(openModal(str))
});

export default connect(mSTP, mDTP)(Splash);
