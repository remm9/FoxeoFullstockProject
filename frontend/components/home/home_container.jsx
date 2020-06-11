import { connect } from 'react-redux';
import Home from './home'
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';
import { login } from '../../actions/session_actions';

const mSTP = state => {
    const videos = Object.values(state.entities.videos)
    // console.log(videos)
    return ({
        currentUser: state.entities.users[state.session.id],
        videos
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    login: user => dispatch(login(user))
});


export default connect(mSTP, mDTP)(Home);

