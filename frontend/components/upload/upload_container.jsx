import { connect } from 'react-redux';
import Upload from './upload';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = state => {
    // debugger
    return { 
        video: state.entities.videos[state.session.id],
        errors: state.errors
    }
};

// const mSTP = state => ({
//     video: state.entities.videos[state.session.id],
// });

const mDTP = dispatch => ({
    upload: (video) => dispatch(fetchVideo(video)), // probably need refactoring
});


export default connect(mSTP, mDTP)(Upload);