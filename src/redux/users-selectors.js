
import {createSelector} from "reselect";


const getAllUsers = (state) => {
    return state.users.usersStore
};
export const getAllUsersSelector = createSelector(getAllUsers, (users) => {
    return users.filter(user => true)
});

const getPageSizeSelector = (state) => {
    return state.users.pageSize
};
export const getPageSize = createSelector(
    getPageSizeSelector,
    (pageSize) => pageSize
);


const getTotalUsersCountSelector = (state) => {
    return state.users.totalUsersCount
};
export const getTotalUsersCount = createSelector(
    getTotalUsersCountSelector,
    (totalUsersCount) => totalUsersCount
);


const getRequiredPageSelector = (state) => {
    return state.users.requiredPage
};
export const getRequiredPage = createSelector(
    getRequiredPageSelector,
    (page) => page
);

const getFetchingStatusSelector = (state) => {
    return state.users.isFetching
};
export const getFetchingStatus = createSelector(
    getFetchingStatusSelector,
    (isFetching) => isFetching
);


const getFollowingInProgressSelector = (state) => {
    return state.users.isFollowingInProgress
};
export const getFollowingInProgress = createSelector(
    getFollowingInProgressSelector,
    (isFollowingInProgress) => isFollowingInProgress
);
