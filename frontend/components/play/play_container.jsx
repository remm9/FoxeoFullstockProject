import { connect } from 'react-redux';
import Play from './play';
import { fetchVideo } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';
import { fetchUsers } from '../../actions/user_actons';

const mSTP = (state, ownProps) => {
    // console.log(users)
    const users = Object.values(state.entities.users)
    return {
        video: state.entities.videos[ownProps.match.params.id],
        users
        // video: state.entities.videos[3],
    }
};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
});


export default connect(mSTP, mDTP)(Play);