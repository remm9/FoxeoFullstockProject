import { connect } from 'react-redux';
import Home from './home';
import { receiveCurrentUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)), // fetchUser 
});


export default connect(mSTP, mDTP)(Home);


