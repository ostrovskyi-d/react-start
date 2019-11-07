import {authAPI, loginAPI} from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const LOG_IN = "LOG-IN";

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
                ...action.data
            }
        }
        default:
            return state;
    }
};

export const setUserDataAC = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});
export const logInAC = (email, password, remember) => ({type: LOG_IN, data: {email, password, remember}});
export const getMyUserDataThunkCreator = () => (dispatch) => {
    authAPI.getMyUserData().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserDataAC(id, login, email));
        }
    })
};

// need to zamutit normalno
export const loginThunkCreator = (email, password, remember) => (dispatch) => {
    loginAPI.login(email, password, remember).then(data => {
        if(data.resultCode === 0) {
            let {email, password, remember} = data.data;
            dispatch(logInAC(email, password, remember));
        }
    })
}
export default authReducer;