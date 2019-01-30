import * as types from "./AuthTypes";
import { base_url } from "../../Config/config";
import axios from 'axios';

/**
 * user registration goes here, any person can register .
 * after registration success the person will get an email to activate his/her account
 */
export const register = (user, cb) => dispatch => {
    console.log(user)
    const formData = new FormData();
    formData.append('avatar', user.avatar);
    dispatch({
        type: types.REGISTER_REQUEST
    })

    axios.post(`${base_url}/register`, user
    // , {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // }
    )
        .then(res => {
            console.log(res)
            dispatch({
                type: types.REGISTER_SUCCESS,
                payload: res.data
            })
            cb('success')
        })
        .catch(err => {
            console.log(err.response.data)

            dispatch({
                type: types.REGISTER_FAILURE
            })
            cb('error')
        })

}
/**
 * Email validation goes here 
 * this method is a called when user click on the email activation link
 * this method verify the token and if user is verified it send them to profile page
 */
export const validateEmail = (token, cb) => dispatch => {
    console.log(token)
    dispatch({
        type: types.VALIDATE_EMAIL_REQUEST
    })
    axios.post(`${base_url}/changeEmail`, { token })
        .then(res => {
            console.log(res)
            if (res.data === true) {
                console.log('email is valid')
               cb()
            }
        })
        .catch(err => {
            console.log(err)
        })

}
export const changeEmail = (user, cb) => dispatch => {
    console.log(user)
    // dispatch({
    //     type: types.VALIDATE_EMAIL_REQUEST
    // })
    axios.post(`${base_url}/sendMail`, user)
        .then(res => {
            console.log(res)
               cb()
        })
        .catch(err => {
            console.log(err)
        })

}
/**
 * change password
 */
export const changePassword = (user, cb) => dispatch => {
    console.log(user)
    axios.put(`${base_url}/changePassword`, user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

}
/**
 * login request with username(email) and password
 * after successfull login it store the recieved token to local storage sends to dashboard 
 */
export const login = (user, cb) => dispatch => {
    dispatch({
        type: types.LOGIN_REQUEST
    })
    axios.post(`${base_url}/login`, user)
        .then(res => {
            console.log(res)
            const { token, user } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data
            })
            cb('success')
        })
        .catch(err => {

            console.log(err)
            // history.push({
            //     pathname: '/'
            // })
            dispatch({
                type: types.LOGIN_FAILURE,
                payload: err
            })
            cb('error')
        })
}
/**
 * login request with username(email) and password
 * after successfull login it store the recieved token to local storage sends to dashboard 
 */
export const googleLogin = (user, cb) => dispatch => {
    console.log(user)
    dispatch({
        type: types.GOOGLE_LOGIN_REQUEST
    })
    axios.post(`${base_url}/googleLogin`, user)
        .then(res => {
            console.log(res)
            const { token, user } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: types.GOOGLE_LOGIN_SUCCESS,
                payload: res.data
            })
            cb('success')
        })
        .catch(err => {

            console.log(err)
            // history.push({
            //     pathname: '/'
            // })
            dispatch({
                type: types.GOOGLE_LOGIN_FAILURE,
                payload: err
            })
            cb('error')
        })
}

/**
 * logout the user
 * clear token from localstorage
 * redirect to login 
 */
export const logout = (cb) => dispatch => {
    window.localStorage.clear()
    dispatch({ type: types.LOGOUT })
    cb()
}