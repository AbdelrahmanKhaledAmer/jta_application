import { GET_POST, POST_POST, LOADING } from '../actions/types.js';

const initialState = {
    data: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case POST_POST:
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