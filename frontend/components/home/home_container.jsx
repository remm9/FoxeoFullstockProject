import { connect } from 'react-redux';
import Home from './home'
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';

const mSTP = state => {
    const videos = Object.values(state.entities.videos)
    // console.log(videos)
    return ({
        videos
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId))
});


export default connect(mSTP, mDTP)(Home);

