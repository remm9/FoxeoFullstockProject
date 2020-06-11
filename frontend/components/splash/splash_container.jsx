import { connect } from 'react-redux';
import Splash from './splash'
import { openModal } from '../../actions/modal_actions';
import { signup } from './../../actions/session_actions'
import { login } from '../../actions/session_actions'

const mSTP = (state={}) => ({  //({ session })
    // currentUser: session.currentUser,
        username: 'Demo User',
        password: 'hunter2'
});

const mDTP = dispatch => ({
    // newUserSignup: () => dispatch(openModal('signup'))
    processForm: user => dispatch(login(user)),
    openModal: (str) => dispatch(openModal(str))
});

export default connect(mSTP, mDTP)(Splash);
