import {authAPI} from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";

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
        default:
            return state;
    }
};

export const setUserDataAC = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});

export const getMyUserDataThunkCreator = () => (dispatch) => {
    authAPI.getMyUserData().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserDataAC(id, login, email));
        }
    })
};

export default authReducer;