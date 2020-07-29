import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, updateComment, deleteComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    return {
        state,
        id: ownProps.video.id,
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments,
        history: ownProps.history
    }
}

const mDTP = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentIndex)