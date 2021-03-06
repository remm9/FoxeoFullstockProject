import { connect } from 'react-redux';
import Play from './play';
import { fetchVideo } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actons';
import { fetchComments } from '../../actions/comment_actions';
import { fetchLikes } from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
    const users = Object.values(state.entities.users)
    const likes = Object.values(state.entities.likes)
    const comments = Object.values(state.entities.comments)
    return {
        video: state.entities.videos[ownProps.match.params.id],
        currentUser: state.entities.users[state.session.id],
        users,
        comments,
        likes,
    }
};

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUsers: () => dispatch(fetchUsers()),
});


export default connect(mSTP, mDTP)(Play);