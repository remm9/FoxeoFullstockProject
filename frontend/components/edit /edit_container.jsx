import React from 'react';
import connect from  'react-redux';
import Edit from './edit'
import { fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';

const mSTP = state => {
    console.log(state)
    return {
        video: state.entities.videos[state.session.id],
        user: state.entities.users[state.session.id],
        errors: state.errors
    }
}

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    updateVideo: video => dispatch(updateVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
})

export default connect(mSTP, mDTP)(Edit);