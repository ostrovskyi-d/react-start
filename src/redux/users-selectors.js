export const getAllUsers = (state) => {
    return state.users.usersStore
};
export const getPageSize = (state) => {
    return state.users.pageSize
};
export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount
};
export const getRequiredPage = (state) => {
    return state.users.requiredPage
};
export const getFetchingStatus = (state) => {
    return state.users.isFetching
};
export const getFollowingInProgress = (state) => {
    return state.users.isFollowingInProgress
};
