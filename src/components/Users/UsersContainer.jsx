import {connect} from "react-redux";
import {
    followThisUserThunkCreator,
    getMoreUsersThunkCreator,
    requestUsers,
    toggleFollowingProgress,
    unFollowThisUserThunkCreator,
} from "../../redux/users-reducer";
import React, {useEffect} from "react";
import UsersDumb from "./UsersDumb/UsersDumb";
import Preloader from "../Placeholders-etc/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAllUsers,
    getFetchingStatus, getFollowingInProgress,
    getPageSize,
    getRequiredPage,
    getTotalUsersCount
} from "../../redux/users-selectors";

const UsersContainer = (props) => {
    const {
        pageSize,
        requiredPage,
        getUsersThunkCreator,
        getMoreUsers,
        isFollowingInProgress,
        unFollowThisUserThunkCreator,
        followThisUserThunkCreator,
        users,
        totalUsersCount,
        isFetching
    } = props;

    const changePage = (pageNumber) => getUsersThunkCreator(pageNumber, pageSize);

    useEffect(() => getUsersThunkCreator(requiredPage, pageSize), [requiredPage, getUsersThunkCreator, pageSize]);

    return <>
        {isFetching
            ? <Preloader/>
            : null
        }
        <UsersDumb
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            requiredPage={requiredPage}
            onChangePage={changePage}
            users={users}
            follow={followThisUserThunkCreator}
            unfollow={unFollowThisUserThunkCreator}
            isFollowingInProgress={isFollowingInProgress}
            getMoreUsers={getMoreUsers}
        />
    </>;
};


let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        requiredPage: getRequiredPage(state),
        isFetching: getFetchingStatus(state),
        isFollowingInProgress: getFollowingInProgress(state),
    }
};
let mapDispatchToProps = {
    toggleFollowingProgress: toggleFollowingProgress,
    getUsersThunkCreator: requestUsers,
    followThisUserThunkCreator: followThisUserThunkCreator,
    unFollowThisUserThunkCreator: unFollowThisUserThunkCreator,
    getMoreUsers: getMoreUsersThunkCreator

};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersContainer);



