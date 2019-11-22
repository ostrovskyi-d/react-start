import {authAPI, loginAPI, securityAPI} from "../API/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = "SET-USER-DATA";
const LOG_IN = "LOG-IN";
const LOG_OUT = "LOG-OUT";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

let initialState = {
    userId: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false,
    captchaImgURL: null,
};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOG_IN: {
            return {
                ...state,
                userId: action.userId,
                isAuth: true,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaImgURL: action.captchaURL
            }
        }
        default:
            return state;
    }
};

export const setUserDataAC = (userId, login, email) => (
    {
        type: SET_USER_DATA,
        data: {userId, login, email}
    });
export const logInAC = (userId) => ({type: LOG_IN, userId});
export const logOutAC = (userId, email, login, rememberMe, isAuth) => (
    {
        type: LOG_OUT,
        payload: {userId, email, login, rememberMe, isAuth}
    });

export const setCaptchaUrl = (captchaURL) => ({type: SET_CAPTCHA_URL, captchaURL});

export const getMyUserDataThunkCreator = () => (dispatch) => {
    authAPI.getMyUserData().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserDataAC(id, login, email));
        }
    })
};


export const loginThunkCreator = (data) => (dispatch) => {
    loginAPI.login(data).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(logInAC(response.data.data.userId))
        } else if (response.data.resultCode === 10) {
            securityAPI.getCaptchaUrl().then(response => {
                dispatch(setCaptchaUrl(response.data.url));
            })
        } else {
            response.data.messages[0] &&
            dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
        }
    })
};

export const logOutThunkCreator = () => (dispatch) => {
    loginAPI.logOut().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(logOutAC(null, null, null, false, false));
        } else {
            alert("Logout failed")
        }
    })
};

export default authReducer;