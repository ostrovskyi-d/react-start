import {usersAPI} from "../API/api";

const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";
const SET_PAGE_SIZE = "SET-PAGE-SIZE";


let initialState = {
    usersStore: [],
    pageSize: 10,
    totalUsersCount: null,
    requiredPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_USERS: {
            const defaultUsersIncrement = 15;
            return {
                ...state,
                pageSize: state.pageSize + defaultUsersIncrement
            };
        }
        case FOLLOW: {
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
                usersStore: [...action.usersStore],

            }
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                requiredPage: action.pageNumber
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        default:
            return state;
    }
};

const showMoreUsers = () => ({type: SHOW_MORE_USERS});
const followSuccess = (userID) => ({type: FOLLOW, userID});
const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
const setUsers = (usersStore) => ({type: SET_USERS, usersStore});
const changePage = (pageNumber) => ({type: CHANGE_PAGE, pageNumber});
const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFollowingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFollowingInProgress,
    userId
});
const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});


export const requestUsers = (requiredPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(requiredPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(changePage(requiredPage))
    })
};

export const followThisUserThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) dispatch(followSuccess(userId));
        dispatch(toggleFollowingProgress(false, userId));
    });
};
export const unFollowThisUserThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollowUser(userId).then(data => {
        if (data.resultCode === 0) dispatch(unfollowSuccess(userId));
        dispatch(toggleFollowingProgress(false, userId));
    });
};
export const getMoreUsersThunkCreator = () => (dispatch) => {
    dispatch(showMoreUsers());
};
export const setPageSizeThunk = (pageSize) => (dispatch) => {
    dispatch(setPageSize(pageSize))
};


export default usersReducer;