import { connect } from 'react-redux';
import Home from './home'
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';
import { login } from '../../actions/session_actions';

const mSTP = state => {
    const videos = Object.values(state.entities.videos)
    const users = Object.values(state.entities.users)
    console.log(videos)
    console.log(state)
    // const videoId = ownProps.match.params.videoId
    // const video = entities.videos[videoId];

    // if (video) {
    //     owner = entities.users[video.owner_id];
    // }
    return ({
        currentUser: state.entities.users[state.session.id],
        videos,
        
        // video,
        // owner
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    // fetchUsers: () => dispatch(fetchUsers()),
    login: user => dispatch(login(user))
});


export default connect(mSTP, mDTP)(Home);

