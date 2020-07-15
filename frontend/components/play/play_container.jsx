import { connect } from 'react-redux';
import Play from './play';
import { fetchVideo } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actons';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    const users = Object.values(state.entities.users)
    const history = ownProps.history;
    return {
        video: state.entities.videos[ownProps.match.params.id],
        users,
        history
    }
};

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUsers: () => dispatch(fetchUsers()),
});


export default connect(mSTP, mDTP)(Play);