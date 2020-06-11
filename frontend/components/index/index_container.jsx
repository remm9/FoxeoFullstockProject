import { connect } from 'react-redux';
import Index from './index';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = state => {
    const videos = Object.values(state.entities.videos)
    return ({
        videos
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
});


export default connect(mSTP, mDTP)(Index);