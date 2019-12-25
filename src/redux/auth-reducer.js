import {authAPI, loginAPI, securityAPI} from "../API/api";
import {stopSubmit} from 'redux-form'

const SET_CAPTCHA_URL = "network/auth/SET-CAPTCHA-URL";
const SET_USER_DATA   = "network/auth/SET-USER-DATA";
const LOG_IN          = "network/auth/LOG-IN";
const LOG_OUT         = "network/auth/LOG-OUT";

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






export const getMyUserDataThunkCreator = () => async (dispatch)  => {
    let data = await authAPI.getMyUserData();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserDataAC(id, login, email));
    }
};


export const loginThunkCreator = (data) => async (dispatch) => {
    let response = await loginAPI.login(data);
    if (response.data.resultCode === 0) {
        dispatch(logInAC(response.data.data.userId))
    } else if (response.data.resultCode === 10) {

        // -------- тут 100% якась лажа з цією капчою, треба дочекатися 98
        securityAPI.getCaptchaUrl().then(response => {
            dispatch(setCaptchaUrl(response.data.url));
        })
    } else {
        response.data.messages[0] &&
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }
};

export const logOutThunkCreator = () => async (dispatch) => {
    let response = await loginAPI.logOut();
    if (response.data.resultCode === 0) {
        dispatch(logOutAC(null, null, null, false, false));
    } else {
        alert("Logout failed")
    }
};

export default authReducer;