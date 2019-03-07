import axios from '../axios/axios';
import * as types from './actionTypes';

export const login = (username, password) => dispatch => {
    axios().post('http://localhost:5000/api/login', {username, password})
        .then(res => {
            dispatch({ type: types.LOGIN_SUCCES, payload: res.data });
            localStorage.setItem('token', res.data.payload);
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err});
        });
        dispatch({ type: types.SPINNER_OFF});
};

export const getFriends = () => dispatch => {
    dispatch({ type: types.SPINNER_ON });
    axios().get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: types.GET_FRIENDS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err});
        });
    dispatch({ type: types.SPINNER_OFF});
};


