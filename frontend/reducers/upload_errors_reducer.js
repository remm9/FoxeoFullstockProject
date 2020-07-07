import { RECEIVE_ERRORS } from '../actions/session_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions'

const uploadErrorsReducer = (state = [], action) => { 
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_VIDEO:
            return []; 
        default:
            return state;
    }
};

export default uploadErrorsReducer;