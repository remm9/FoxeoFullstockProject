import { connect } from 'react-redux';
import Upload from './upload';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    // video: this.state.ownProps[ownProps.match.params.video.id],
    video: state.entities.videos[state.session.id],
});

const mDTP = dispatch => ({
    upload: (video) => dispatch(fetchVideo(video)), // probably need refactoring
});


export default connect(mSTP, mDTP)(Upload);