import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actons';

const userReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_ALL_USERS:
            return action.users;
        default:
            return oldState;
    }
}

export default userReducer;