import { connect } from 'react-redux';
import Liked from './liked'
import { fetchVideos } from '../../actions/video_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actons';
import { login } from '../../actions/session_actions';

const mSTP = state => {
    const videos = Object.values(state.entities.videos)
    const likes = Object.values(state.entities.likes)

    return ({
        currentUser: state.entities.users[state.session.id],
        videos,
        likes
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    login: user => dispatch(login(user))
});


export default connect(mSTP, mDTP)(Liked);
