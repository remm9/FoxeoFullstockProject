import { RECEIVE_VIDEO } from '../actions/video_actions';

const videoReducer = (oldState = {}, action) => {
    // console.log(action)
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video;
            return newState;
        default:
            return oldState;
    }
    
}

export default videoReducer;