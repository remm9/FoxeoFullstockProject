import { connect } from 'react-redux';
import Play from './play';
import { fetchVideo } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actons';
import { fetchComments } from '../../util/comment_api_util';

const mSTP = (state, ownProps) => {
    const users = Object.values(state.entities.users)
    return {
        video: state.entities.videos[ownProps.match.params.id],
        users
    }
};

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUsers: () => dispatch(fetchUsers()),
});


export default connect(mSTP, mDTP)(Play);