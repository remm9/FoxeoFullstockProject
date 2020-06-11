import { connect } from 'react-redux';
import Play from './play';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => {
    // console.log(state)
    return {
        video: state.entities.videos[ownProps.match.params.id],
        // video: state.entities.videos[3],
    }
};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
});


export default connect(mSTP, mDTP)(Play);