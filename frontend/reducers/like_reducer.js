import { RECEIVE_ALL_LIKES } from '../actions/like_actions';
import { RECEIVE_LIKE } from '../actions/like_actions';
import { REMOVE_LIKE } from '../actions/like_actions'

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            // debugger
            delete newState[action.likeId];
            // debugger
            return newState;
        default:
            return oldState;
    }
}

export default likesReducer;