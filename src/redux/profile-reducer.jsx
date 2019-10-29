import {usersAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_ONE_LIKE = "ADD-ONE-LIKE";
const SET_USER_PROFILE = "SET-USER-PROFILE"

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
        default:
            return state;
    }
};

export const updatePostTextAC = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});
export const addPostAC = () => ({type: ADD_POST});
export const addOneLikeAC = (id) => ({type: ADD_ONE_LIKE, id: id});
export const setUserProfileAC = (userData) => ({type: SET_USER_PROFILE, userData});

export const getUserProfileByIdThunkCreator = (userId) => (dispatch) => {
    usersAPI.getUserProfileById(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    });
};

export default profileReducer;