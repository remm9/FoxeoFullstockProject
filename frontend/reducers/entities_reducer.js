import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videoReducer from './video_reducer';
import commentReducer from './comments_reducer'
import likeReducer from './like_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videoReducer,
    comments: commentReducer,
    likes: likeReducer
});

export default entitiesReducer; 