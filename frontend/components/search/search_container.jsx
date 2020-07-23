import { connect } from 'react-redux';
import Search from './search'
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actons';
import { fetchUsers } from '../../actions/user_actons';

const mSTP = ( state, ownProps ) => {

    const videos = Object.values(state.entities.videos);
    const users = Object.values(state.entities.users);
    return ({
        currentUser: state.entities.users[state.session.id],
        videos,
        users,
        searchArray: ownProps.location.search.split("=")[1],
    })
};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
});


export default connect(mSTP, mDTP)(Search);
