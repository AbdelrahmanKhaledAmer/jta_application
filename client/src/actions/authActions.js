import axios from 'axios';
import { POST_USER_LOGIN, POST_USER_SIGNUP, LOADING } from './types.js';

export const login = (userInfo) => dispatch => {
    dispatch(loading);
    axios.post('./api/login', userInfo)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: POST_USER_LOGIN,
                payload: res.data.token
            });
            window.location = "/";
        })
        .catch((err) => {
            console.log(err);
            window.alert("Wrong username or password");
            dispatch({
                type: POST_USER_LOGIN,
                payload: err.status
            });
        });
};

export const signup = (userInfo) => dispatch => {
    dispatch(loading);
    axios.post('./api/signup', userInfo)
        .then((res) => {
            window.alert("Registration successful. Try logging in.");
            dispatch({
                type: POST_USER_SIGNUP
            });
            window.location = "/";
        })
        .catch((err) => {
            if (err.status >= 500) {
                window.alert("An error occured on our side. Please try again in a few minutes");
            } else {
                window.alert("A user already has this email. Maybe you want to log in?");
            }
            dispatch({
                type: POST_USER_SIGNUP,
                payload: err.status
            })
        });
};

export const loading = () => {
    return {
        type: LOADING
    }
}