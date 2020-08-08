import { connect } from 'react-redux';
import Like from './like';
import { fetchLikes, createLike, deleteLike} from '../../actions/like_actions';
import { updateComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    // console.log(state, ownProps)
    const video = ownProps.video;
    const likes = state.entities.likes;
    const currentUserId = state.session.id;
<<<<<<< HEAD
    const updateLikes = ownProps.updateLikes;
    // debugger
=======
>>>>>>> 8ad2a1f76478014a00fb74109b85d0fb5bd2115a
    return {
        video,
        likes,
        currentUserId,
<<<<<<< HEAD
        updateLikes: updateLikes,
=======
>>>>>>> 8ad2a1f76478014a00fb74109b85d0fb5bd2115a
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