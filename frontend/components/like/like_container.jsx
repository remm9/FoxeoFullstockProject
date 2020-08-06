import { connect } from 'react-redux';
import Like from './like';
import { fetchLikes, createLike, deleteLike} from '../../actions/like_actions';
import { updateComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    // console.log(state, ownProps)
    const video = ownProps.video;
    const likes = state.entities.likes;
    const currentUserId = state.session.id;
    const updateLikes = ownProps.updateLikes;
    // debugger
    return {
        likes,
        video,
        currentUserId,
        updateLikes: updateLikes,
    }
}

const mDTP = dispatch => {
    return {
        fetchLikes: () => dispatch(fetchLikes()),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
        // updateLikes: newLikes => dispatch(updateLikes(newLikes))
    }
}

export default connect(mSTP, mDTP)(Like)