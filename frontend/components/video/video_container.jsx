import { connect } from 'react-redux';
import Video from './video'
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';
import { fetchLikes } from '../../actions/like_actions';
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


export default connect(mSTP, mDTP)(Video);
