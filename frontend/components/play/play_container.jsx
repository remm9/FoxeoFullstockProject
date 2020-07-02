import { connect } from 'react-redux';
import Play from './play';
import { fetchVideo } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actons';

const mSTP = (state, ownProps) => {
    const users = Object.values(state.entities.users)
    return {
        video: state.entities.videos[ownProps.match.params.id],
        users
    }
};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUsers: () => dispatch(fetchUsers()),
});


export default connect(mSTP, mDTP)(Play);