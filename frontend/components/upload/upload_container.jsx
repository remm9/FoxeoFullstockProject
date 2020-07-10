import { connect } from 'react-redux';
import Upload from './upload';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = state => {
    // 
    return { 
        video: state.entities.videos[state.session.id],
        errors: state.errors
    }
};

const mDTP = dispatch => ({
    upload: (video) => dispatch(fetchVideo(video)),
});


export default connect(mSTP, mDTP)(Upload);