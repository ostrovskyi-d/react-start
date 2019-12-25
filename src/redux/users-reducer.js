import {usersAPI} from '../API/api';
import {updateObjectsInArray} from './object-helpers';

const SHOW_MORE_USERS = 'network/users/SHOW-MORE-USERS';
const FOLLOW = 'network/users/FOLLOW';
const UNFOLLOW = 'network/users/UNFOLLOW';
const SET_USERS = 'network/users/SET-USERS';
const CHANGE_PAGE = 'network/users/CHANGE-PAGE';
const SET_TOTAL_USERS_COUNT = 'network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'network/users/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'network/users/TOGGLE-FOLLOWING-PROGRESS';
const SET_PAGE_SIZE = 'network/users/SET-PAGE-SIZE';

let initialState = {
  usersStore: [],
  pageSize: 10,
  totalUsersCount: null,
  requiredPage: 1,
  isFetching: false,
  isFollowingInProgress: [],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE_USERS: {
      const defaultUsersIncrement = 15;
      return {
        ...state,
        pageSize: state.pageSize + defaultUsersIncrement,
      };
    }
    case FOLLOW: {
      return {
        ...state,
        usersStore: updateObjectsInArray(state.usersStore, action.userID, 'id',
            {followed: true}),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        usersStore: updateObjectsInArray(state.usersStore, action.userID, 'id',
            {followed: false}),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        usersStore: [...action.usersStore],

      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        requiredPage: action.pageNumber,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        isFollowingInProgress: action.isFollowingInProgress
            ? [...state.isFollowingInProgress, action.userId]
            : state.isFollowingInProgress.filter(id => id !== action.userId),
      };

    }
    case SET_PAGE_SIZE: {
      return {
        ...state,
        pageSize: action.pageSize,
      };
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
const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFollowingInProgress, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFollowingInProgress,
  userId,
});
const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});

export const requestUsers = (requiredPage, pageSize) =>
    async (dispatch) => {
      dispatch(toggleIsFetching(true));
      let data = await usersAPI.getUsers(requiredPage, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(changePage(requiredPage));
    };

export const followUnfollowToggling =
    async (dispatch, apiMethod, actionCreator, userId) => {
      dispatch(toggleFollowingProgress(true, userId));
      let data = await apiMethod(userId);
      if (data.resultCode === 0) dispatch(actionCreator(userId));
      dispatch(toggleFollowingProgress(false, userId));
    };

export const followThisUserThunkCreator = (userId) => (dispatch) =>
    followUnfollowToggling(dispatch, usersAPI.followUser, followSuccess,
        userId);
export const unFollowThisUserThunkCreator = (userId) => (dispatch) =>
    followUnfollowToggling(dispatch, usersAPI.unFollowUser, unfollowSuccess,
        userId);

export const getMoreUsersThunkCreator = () => (dispatch) => {
  dispatch(showMoreUsers());
};
export const setPageSizeThunk = (pageSize) => (dispatch) => {
  dispatch(setPageSize(pageSize));
};

export default usersReducer;