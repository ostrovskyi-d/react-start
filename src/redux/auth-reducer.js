import {authAPI, loginAPI} from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const LOG_IN = "LOG-IN";
const LOG_OUT = "LOG-OUT";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
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
                isAuth: false
            }
        }
        default:
            return state;
    }
};

export const setUserDataAC = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});
export const logInAC = (userId) => ({type: LOG_IN, userId});
export const logOutAC = () => ({type: LOG_OUT});

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
        if(response.data.resultCode === 0) {
            dispatch(logInAC(response.data.data.userId));
        }
    })
};

export const logOutThunkCreator = () => (dispatch) => {
    loginAPI.logOut().then(() => {
        dispatch(logOutAC());
    })
};

export default authReducer;