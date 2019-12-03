import {createSelector} from "reselect";

const getUserDataSelector = state => state.profilePage.userData;
export const getUserData = createSelector(getUserDataSelector, userData => userData);

const getStatusSelector = state => state.profilePage.status;
export const getCurrentStatus = createSelector(getStatusSelector, status => status);
