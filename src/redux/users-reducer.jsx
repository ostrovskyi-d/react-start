const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let initialState = {
    usersStore: [],
    pageSize: 100,
    totalUsersCount: null,
    currentPage: 1
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
                usersStore: [...action.usersStore]
            }
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            debugger
            return {
                ...state,
                totalUsersCount: action.count
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
export const changePageAC = (pageNumber) => ({type: CHANGE_PAGE, pageNumber});
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export default usersReducer;