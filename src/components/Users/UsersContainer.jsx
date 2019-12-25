import {connect} from "react-redux";
import {
    followThisUserThunkCreator,
    getMoreUsersThunkCreator,
    requestUsers, setPageSizeThunk,
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
    getFetchingStatus,
    getFollowingInProgress,
    getPageSize,
    getRequiredPage,
    getTotalUsersCount
} from "../../redux/users-selectors";

const UsersContainer = React.memo((props) => {
    const {
        pageSize,
        requiredPage,
        getUsersThunkCreator,
        isFetching
    } = props;

    const changePage = (pageNumber) => getUsersThunkCreator(pageNumber, pageSize);

    useEffect(() => {
        getUsersThunkCreator(requiredPage, pageSize)
    }, [requiredPage, getUsersThunkCreator, pageSize]);

    return <>
        {isFetching
            ? <Preloader/>
            : <UsersDumb
                {...props}
                changePage={changePage}
            />
        }

    </>;
});


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
    getMoreUsers: getMoreUsersThunkCreator,
    setPageSize: setPageSizeThunk
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersContainer);



