import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_ONE_LIKE = "ADD-ONE-LIKE";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const GET_STATUS = "GET-STATUS";
const UPDATE_STATUS = "UPDATE-STATUS";

let initialState = {
    postsData: [
        {
            id: 1,
            postMessage: 'Some information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
            likes: 12
        },
        {
            id: 2,
            postMessage: 'Information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
            likes: 200
        },
        {
            id: 3,
            postMessage: 'kuku',
            likes: 213
        },
        {
            id: 4,
            postMessage: 'Lol, rofl, chillout, nice flex',
            likes: 100500
        },
    ],
    changeAblePostText: '',
    userData: null,
    status: "ddd"
};

let profileReducer = (state = initialState, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST: {
            if (state.changeAblePostText) {
                return {
                    ...state,
                    postsData: [
                        {
                            id: state.postsData.length + 1,
                            postMessage: state.changeAblePostText,
                            likes: 0
                        },
                        ...state.postsData
                    ],
                    changeAblePostText: ''
                };
            }
            return state;
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                changeAblePostText: action.newText
            };
        }
        case ADD_ONE_LIKE: {
            return {
                ...state,
                postsData: [...state.postsData].map(post => {
                    if (post.id === action.id) {
                        post.likes++;
                        return post;
                    } else {
                        return post;
                    }
                }),
            };
        }
        case SET_USER_PROFILE: {

            return {

                ...state,
                userData: action.userData
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS: {
            return state
        }
        default:
            return state;
    }
};

export const updatePostTextAC = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});
export const addPostAC = () => ({type: ADD_POST});
export const addOneLikeAC = (id) => ({type: ADD_ONE_LIKE, id: id});
export const setUserProfileAC = (userData) => ({type: SET_USER_PROFILE, userData});
export const setStatus = (status) => ({type: UPDATE_STATUS, status})
export const getStatus = (userId) => ({type: GET_STATUS})

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
};
export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
};

export const getUserProfileByIdThunkCreator = (userId) => (dispatch) => {
    usersAPI.getUserProfileById(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    });
};

export default profileReducer;