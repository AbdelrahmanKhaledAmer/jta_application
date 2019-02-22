import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import postReducer from './postReducer.js';

export default combineReducers({
    auth: authReducer,
    post: postReducer
})