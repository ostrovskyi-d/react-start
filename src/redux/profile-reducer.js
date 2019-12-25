import {profileAPI} from "../API/api";

const ADD_POST          = "network/profile/ADD-POST";
const ADD_ONE_LIKE      = "network/profile/ADD-ONE-LIKE";
const SET_USER_PROFILE  = "network/profile/SET-USER-PROFILE";
const GET_STATUS        = "network/profile/GET-STATUS";
const UPDATE_STATUS     = "network/profile/UPDATE-STATUS";
const DELETE_POST       = "network/profile/DELETE-POST";

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
    userData: null,
    status: '',
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (action.newPostBody) return {
                ...state,
                postsData: [
                    {
                        id: state.postsData.length + 1,
                        postMessage: action.newPostBody,
                        likes: 0
                    },
                    ...state.postsData
                ],
            };
            return state;
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.id)
            }
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
        case GET_STATUS:
            return {...state, status: action.status};
        case UPDATE_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export const addPostAC = (newPostBody) => ({type: ADD_POST, newPostBody});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const addOneLikeAC = (id) => ({type: ADD_ONE_LIKE, id: id});
export const setUserProfileAC = (userData) => ({type: SET_USER_PROFILE, userData});
export const updateStatus = (status) => ({type: UPDATE_STATUS, status});

export const addOneLike = (id) => (dispatch) => {
    dispatch(addOneLikeAC(id))
};
export const addPost = (newPostBody) =>  (dispatch) => {
    dispatch(addPostAC(newPostBody))
};

export const deletePostThunk = (id) =>  (dispatch) => {
    dispatch(deletePost(id));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(updateStatus(response.data));
};

export const setStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(updateStatus(status));
    }
};

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfileById(userId);
    dispatch(setUserProfileAC(response.data));
};

export default profileReducer;