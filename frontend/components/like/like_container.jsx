import { connect } from 'react-redux';
import Like from './like';
import { fetchLikes, createLike, deleteLike} from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
    const video = ownProps.video;
    const likes = state.entities.likes;
    const currentUserId = state.session.id;
    const history = ownProps.props.history
    return {
        likes,
        video,
        currentUserId,
        history
    }
}

const mDTP = dispatch => {
    return {
        fetchLikes: () => dispatch(fetchLikes()),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
    }
}

export default connect(mSTP, mDTP)(Like)