import { connect } from 'react-redux';
import User from './user'
import { fetchVideos, deleteVideo } from '../../actions/video_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actons';
import { login } from '../../actions/session_actions';

const mSTP = state => {
    const videos = Object.values(state.entities.videos);
    const comments = Object.values(state.entities.comments);
    const likes = Object.values(state.entities.likes);

    return ({
        currentUser: state.entities.users[state.session.id],
        videos,
        comments,
        likes
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes()),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    login: user => dispatch(login(user))
});


export default connect(mSTP, mDTP)(User);