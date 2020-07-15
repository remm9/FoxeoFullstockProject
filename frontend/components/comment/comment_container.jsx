import { connect } from 'react-redux';
import Comment from './comment';
import * as Actions from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return { 
        state,
        id: ownProps.video.id, 
        history: ownProps.history
    }
}

const mDTP = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        createComment: comment => dispatch(createComment(comment)),
    }
}

export default connect(mSTP, mDTP)(Comment)