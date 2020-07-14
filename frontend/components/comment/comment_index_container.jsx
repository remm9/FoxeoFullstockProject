import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import * as Actions from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        state,
        id: ownProps.video.id 
    }
}

const mDTP = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        createComment: comment => dispatch(createComment(comment)),
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentIndex)