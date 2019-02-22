import axios from 'axios';
import { GET_POST, POST_POST, LOADING } from './types.js';

export const getPosts = () => dispatch => {
    let config = {
        headers: {
            "access-token": localStorage.getItem("token")
        }
    }
    dispatch(loading);
    axios.get('./api/posts', config)
        .then((res) => {
            dispatch({
                type: GET_POST,
                payload: res.data.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    return {
        type: GET_POST
    };
};

export const makePost = (post) => dispatch => {
    let config = {
        headers: {
            "access-token": localStorage.getItem("token")
        }
    }
    dispatch(loading);
    axios.post('./api/posts', post, config)
        .then((res) => {
            dispatch({
                type: GET_POST
            })
            window.location = "/";
        })
        .catch((err) => {
            console.log(err);
        });
    return {
        type: POST_POST
    };
};

export const loading = () => {
    return {
        type: LOADING
    }
}