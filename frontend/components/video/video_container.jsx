import { connect } from 'react-redux';
import Video from './video';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    // video: state.entities.videos[ownProps.match.params.session.id],
    // video: state.entities.videos[ownProps.match.params.videoId],
    video: state.entities.videos[3],
});

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
     // probably need refactoring
});


export default connect(mSTP, mDTP)(Video);