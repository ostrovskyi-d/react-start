const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    usersStore: []
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_USERS: {
            console.log("SHOW MORE USERS");
            return {...state};
        }
        case FOLLOW: {
            // створити ефективний спосіб для переключання стану підписки на користувача
            // а створив неефективний

            return {
                ...state,
                usersStore: state.usersStore.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {

            return {
                ...state,
                usersStore: state.usersStore.map(user => {
                    // debugger
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersStore: [...state.usersStore, ...action.usersStore]
            }
        }

        default:
            return state;
    }
};

export const showMoreUsersAC = () => ({type: SHOW_MORE_USERS});
export const followThisUserAC = (userID) => ({type: FOLLOW, userID});
export const unfollowThisUserAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (usersStore) => ({type: SET_USERS, usersStore});
export default usersReducer;