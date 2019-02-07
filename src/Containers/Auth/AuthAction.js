import * as types from "./AuthTypes";
import { base_url } from "../../Config/config";
import axios from 'axios';

/**
 * user registration 
 */
export const register = (user, cb) => dispatch => {
    dispatch({
        type: types.REGISTER_REQUEST
    })

    axios.post(`${base_url}/register`, user)
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
            cb('error', err)
        })

}

/**
 * Email validation 
 */
export const validateEmail = (token, cb) => dispatch => {
    console.log(token)
    dispatch({
        type: types.VALIDATE_EMAIL_REQUEST
    })
    axios.post(`${base_url}/changeEmail`, { token })
        .then(res => {
            console.log(res)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            dispatch({
                type: types.VALIDATE_EMAIL_SUCCESS,
                payload: res.data
            })
            cb('success')
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.VALIDATE_EMAIL_FAILURE
            })
            cb('error', err)
        })

}

/**
 * send request to change email of a user
 */
export const changeEmail = (user, cb) => dispatch => {
    console.log(user)
    dispatch({
        type: types.SEND_EMAIL_REQUEST
    })
    axios.post(`${base_url}/sendMail`, user)
        .then(res => {
            console.log(res)
            dispatch({
                type: types.SEND_EMAIL_SUCCESS
            })
            cb('success')
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.SEND_EMAIL_FAILURE
            })
            cb('error')
        })

}

/**
 * change password
 */
export const changePassword = (user, cb) => dispatch => {
    console.log(user)
    dispatch({
        type: types.CHANGE_PASSWORD_REQUEST
    })
    axios.put(`${base_url}/changePassword`, user)
        .then(res => {
            console.log(res)
            dispatch({
                type: types.CHANGE_PASSWORD_SUCCESS
            })
            cb('success')
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.CHANGE_PASSWORD_FAILURE
            })
            cb('error', err)
        })

}

/**
 * forgot password
 */
export const forgotPassword = (email, cb) => dispatch => {
    console.log(email)
    dispatch({
        type: types.FORGOT_PASSWORD_REQUEST
    })
    axios.post(`${base_url}/forgotPassword`, { email })
        .then(res => {
            console.log(res)
            dispatch({
                type: types.FORGOT_PASSWORD_SUCCESS
            })
            cb('success')
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.FORGOT_PASSWORD_FAILURE
            })
            cb('error', err)
        })

}

/**
 * forgot password
 */
export const setPassword = (newPasssword, id, cb) => dispatch => {
    dispatch({
        type: types.SET_PASSWORD_REQUEST
    })
    axios.post(`${base_url}/setPassword`, { newPasssword, id })
        .then(res => {
            console.log(res)
            dispatch({
                type: types.SET_PASSWORD_SUCCESS
            })
            cb('success')
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.SET_PASSWORD_FAILURE
            })
            cb('error', err)
        })

}
/**
 * forgot password
 */
export const validateResetPasswordLink = (token, cb) => dispatch => {
    console.log(token)
    dispatch({
        type: types.VALIDATE_RESET_PASSWORD_LINK_REQUEST
    })
    axios.post(`${base_url}/resetPassword`, { token })
        .then(res => {
            console.log(res)
            dispatch({
                type: types.VALIDATE_RESET_PASSWORD_LINK_SUCCESS
            })
            cb('success', res)
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.VALIDATE_RESET_PASSWORD_LINK_FAILURE
            })
            cb('error', err)
        })

}
/**
 * login request
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
            dispatch({
                type: types.LOGIN_FAILURE,
                payload: err
            })
            cb('error', err)
        })
}

/**
 * login with google
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