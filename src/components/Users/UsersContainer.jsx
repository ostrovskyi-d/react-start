import {connect} from "react-redux";
import {
    followThisUserThunkCreator,
    getMoreUsersThunkCreator,
    getUsersThunkCreator,
    toggleFollowingProgress,
    unFollowThisUserThunkCreator,
} from "../../redux/users-reducer";
import React, {useEffect} from "react";
import UsersDumb from "./UsersDumb/UsersDumb";
import Preloader from "../Placeholders-etc/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const UsersContainer = (props) => {
    const {
        pageSize,
        currentPage,
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

    useEffect(() => getUsersThunkCreator(currentPage, pageSize), [currentPage, getUsersThunkCreator, pageSize]);

    return <>
        {isFetching
            ? <Preloader/>
            : null
        }
        <UsersDumb
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
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
        users: state.users.usersStore,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowingInProgress: state.users.isFollowingInProgress,
    }
};
let mapDispatchToProps = {
    toggleFollowingProgress: toggleFollowingProgress,
    getUsersThunkCreator: getUsersThunkCreator,
    followThisUserThunkCreator: followThisUserThunkCreator,
    unFollowThisUserThunkCreator: unFollowThisUserThunkCreator,
    getMoreUsers: getMoreUsersThunkCreator

};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersContainer);



