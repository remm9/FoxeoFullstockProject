import { connect } from 'react-redux';
import Carousel from './carousel';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actons';

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
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(Carousel);