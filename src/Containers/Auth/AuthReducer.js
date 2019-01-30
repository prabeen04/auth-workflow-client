import * as types from "./AuthTypes";

const initialState = {
    registering: false,
    registeringError: false,
    registeringSuccess: false,
    user:  JSON.parse(localStorage.getItem('user')),
    logging: false,
    loginError: false,
    token: localStorage.getItem('token') || '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
            return { ...state, registering: true, registeringError: false }
        case types.REGISTER_SUCCESS:
            return { ...state, registering: false, registeringError: false, registeringSuccess: true, user: action.payload.user }
        case types.REGISTER_FAILURE:
            return { ...state, registering: false, registeringError: true }

        case types.VALIDATE_EMAIL_REQUEST:
            return { ...state }
        case types.VALIDATE_EMAIL_SUCCESS:
            return { ...state }
        case types.VALIDATE_EMAIL_FAILURE:
            return { ...state }

        case types.SET_PASSWORD_REQUEST:
            return { ...state }
        case types.SET_PASSWORD_SUCCESS:
            return { ...state }
        case types.SET_PASSWORD_FAILURE:
            return { ...state }

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