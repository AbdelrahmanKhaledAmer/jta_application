import { POST_USER_LOGIN, POST_USER_SIGNUP, LOADING } from '../actions/types.js';

const initialState = {
    token: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_USER_LOGIN:
            return {
                ...state,
                token: action.payload,
                loading: false
            };
        case POST_USER_SIGNUP:
            return {
                ...state,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}