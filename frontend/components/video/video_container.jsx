import { connect } from 'react-redux';
import Video from './video';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = state => ({
    video: state.entities.videos[state.session.id],
});

const mDTP = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)), // probably need refactoring
});


export default connect(mSTP, mDTP)(Video);