import * as types from "./AuthTypes";

const initialState = {
    registering: false,
    registeringError: false,
    registeringSuccess: false,
    user: JSON.parse(localStorage.getItem('user')),
    logging: false,
    loginError: false,
    token: localStorage.getItem('token') || '',
    sendingEmail: false,
    sendingEmailError: false,
    validatingEmail: false,
    validatingEmailError: false,
    validatingResetPasswordLink: false,
    validatingResetPasswordLinkError: false,
    changingPassword: false,
    changingPasswordError: false,
    forgotPasswordRequest: false,
    forgotPasswordRequestError: false,
    settingPasswordRequest: false,
    settingPasswordRequestError: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
            return { ...state, registering: true, registeringError: false }
        case types.REGISTER_SUCCESS:
            return { ...state, registering: false, registeringError: false, registeringSuccess: true, user: action.payload.user }
        case types.REGISTER_FAILURE:
            return { ...state, registering: false, registeringError: true }

        case types.SEND_EMAIL_REQUEST:
            return { ...state, sendingEmail: true }
        case types.SEND_EMAIL_SUCCESS:
            return { ...state, sendingEmail: false }
        case types.SEND_EMAIL_FAILURE:
            return { ...state, sendingEmail: false, sendingEmailError: true }

        case types.VALIDATE_EMAIL_REQUEST:
            return { ...state, validatingEmail: true }
        case types.VALIDATE_EMAIL_SUCCESS:
            console.log(action.payload.user)
            return { ...state, validatingEmail: false, user: action.payload.user }
        case types.VALIDATE_EMAIL_FAILURE:
            return { ...state, validatingEmail: false, validatingEmailError: true }

        case types.VALIDATE_RESET_PASSWORD_LINK_REQUEST:
            return { ...state, validatingResetPasswordLink: true }
        case types.VALIDATE_RESET_PASSWORD_LINK_SUCCESS:
            return { ...state, validatingResetPasswordLink: false }
        case types.VALIDATE_RESET_PASSWORD_LINK_FAILURE:
            return { ...state, validatingResetPasswordLink: false, validatingResetPasswordLinkError: true }

        case types.CHANGE_PASSWORD_REQUEST:
            return { ...state, changingPassword: true }
        case types.CHANGE_PASSWORD_SUCCESS:
            return { ...state, changingPassword: false }
        case types.CHANGE_PASSWORD_FAILURE:
            return { ...state, changingPassword: false, changingPasswordError: true }

        case types.FORGOT_PASSWORD_REQUEST:
            return { ...state, forgotPasswordRequest: true }
        case types.FORGOT_PASSWORD_SUCCESS:
            return { ...state, forgotPasswordRequest: false }
        case types.FORGOT_PASSWORD_FAILURE:
            return { ...state, forgotPasswordRequest: false, forgotPasswordRequestError: true }

        case types.SET_PASSWORD_REQUEST:
            return { ...state, settingPasswordRequest: true }
        case types.SET_PASSWORD_SUCCESS:
            return { ...state, settingPasswordRequest: false }
        case types.SET_PASSWORD_FAILURE:
            return { ...state, settingPasswordRequest: false, settingPasswordRequestError: true }

        case types.LOGIN_REQUEST:
            return { ...state, logging: true }
        case types.LOGIN_SUCCESS:
            return { ...state, logging: false, user: action.payload.user, token: action.payload.token || localStorage.getItem('token') }
        case types.LOGIN_FAILURE:
            return { ...state, logging: false, loginError: true }

        case types.GOOGLE_LOGIN_REQUEST:
            return { ...state }
        case types.GOOGLE_LOGIN_SUCCESS:
            return { ...state, user: action.payload.user, token: action.payload.token || localStorage.getItem('token') }
        case types.GOOGLE_LOGIN_FAILURE:
            return { ...state }

        default:
            return state;
    }
}