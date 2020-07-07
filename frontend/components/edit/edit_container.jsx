import { connect } from  'react-redux';
import Edit from './edit';
import { fetchVideo, updateVideo } from '../../actions/video_actions';

const mSTP = ( state, ownProps ) => {
    
    return {
        video: state.entities.videos[ownProps.match.params.id],
        errors: state.errors
    }
};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    updateVideo: video => dispatch(updateVideo(video)),
});

export default connect(mSTP, mDTP)(Edit);