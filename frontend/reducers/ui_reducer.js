import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    modalReducer
});

export default uiReducer;