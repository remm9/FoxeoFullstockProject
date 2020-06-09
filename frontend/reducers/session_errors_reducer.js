import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => { //might need to change state = []

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            // debugger
            return action.errors; // MAYBE THIS INSTEAD [action.user.id]: action.user 
        case RECEIVE_CURRENT_USER:
            return []; // return []
        default:
            return state;
    }
};

export default sessionErrorsReducer;