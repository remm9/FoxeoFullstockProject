import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments, updateComment, createComment } from '../../util/comment_api_util';

const mSTP = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    const id = Object.keys(state.entities.videos);
    const video = state.entities.videos[id];
    
    if (video) {
        return { 
            video,
        }
    } else {
        window.location.reload()
    }
    // return {
    //     video: state.entities.videos[ownProps.match.params.id],
    // }
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

export default connect(mSTP, mDTP)(Comment)