import { connect } from 'react-redux';
import Carousel from './carousel';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actons';
import { login } from '../../actions/session_actions';


const mSTP = state => {
    const currentUser = state.entities.users[state.session.id]
    const videos = Object.values(state.entities.videos)
    const users = Object.values(state.entities.users)
    return {
        currentUser,
        videos,
        users
    }
}

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    login: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(Carousel);