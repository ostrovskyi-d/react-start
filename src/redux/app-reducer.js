import {authAPI, loginAPI, securityAPI} from "../API/api";
import {getMyUserDataThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";


let initialState = {
    initialized: false
};


let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getMyUserDataThunkCreator());
    Promise.all([promise])
        .then(() => dispatch(setInitializedSuccess()));
};

export default appReducer;