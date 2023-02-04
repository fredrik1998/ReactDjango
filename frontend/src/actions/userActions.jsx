import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET
} from '../constants/userConstants'
import axios from 'axios';

export const login = (email, password) => async(dispatch) =>{
    try{
        dispatch({ type: USER_LOGIN_REQUEST});

        const config = {
            headers: {
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            "http://localhost:8000/api/users/login/",
            {'username': email, 'password': password}, config
            );
            
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
    
        localStorage.setItem('usersInfo', JSON.stringify(data));
    }
    catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
          });
    }
}

export const logout = () => async(dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
    dispatch({type: USER_PROFILE_RESET})
}

export const register = (name, email, password) => async(dispatch) => {
    try{
    dispatch({type: USER_REGISTER_REQUEST});

    const config = {
        headers: {
            'Content-type':'application/json'
        }
    }
    const {data} = await axios.post(
        "http://localhost:8000/api/users/register/",
        {'name': name, 'email': email, 'password': password}, config
    );

    dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
    });

    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
    });
}
   catch(error){
    dispatch({
        type: USER_REGISTER_FAIL,
        payload:
        error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
   }
}

export const profile = (id) => async(dispatch, getState) => {
    try{
    dispatch({type: USER_PROFILE_REQUEST});

    const {
        userLogin: {userInfo},
    } = getState()

    const config = {
        headers: {
            'Content-type':'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    const {data} = await axios.get(
        `http://localhost:8000/api/users/${id}`,
         config
    );

    dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data
    });
}
   catch(error){
    dispatch({
        type: USER_PROFILE_FAIL,
        payload:
        error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
   }
}

export const update = (user) => async(dispatch, getState) => {
    try{
    dispatch({type: USER_UPDATE_PROFILE_REQUEST});

    const {
        userLogin: {userInfo},
    } = getState()

    const config = {
        headers: {
            'Content-type':'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    const {data} = await axios.put(
        "http://localhost:8000/api/users/profile/update/",
        user,
        config
    );

    dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data
    });

    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
    });

    localStorage.setItem('usersInfo', JSON.stringify(data));
}
   catch(error){
    dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload:
        error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
   }
}