import { connect } from 'react-redux';
import Home from './home';
import { fetchUser } from '../../actions/user_actons';;
import { openModal } from '../../actions/modal_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    fetchUser: (user) => dispatch(fetchUser(user)), // fetchUser 
});


export default connect(mSTP, mDTP)(Home);


