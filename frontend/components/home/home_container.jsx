import { connect } from 'react-redux';
import Home from './home'
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';
import { fetchUsers } from '../../actions/user_actons';
import { login } from '../../actions/session_actions';

const mSTP = state => {
    const videos = Object.values(state.entities.videos)
    const users = Object.values(state.entities.users)
    return ({
        currentUser: state.entities.users[state.session.id],
        videos,
        users,
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    login: user => dispatch(login(user))
});


export default connect(mSTP, mDTP)(Home);

