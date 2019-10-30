import {connect} from "react-redux";
import {
    followThisUserThunkCreator, getMoreUsersThunkCreator,
    getUsersThunkCreator,
    toggleFollowingProgress,
    unFollowThisUserThunkCreator,
} from "../../redux/users-reducer";
import React from "react";
import UsersDumb from "./UsersDumb/UsersDumb";
import Preloader from "../Placeholders-etc/Preloader/Preloader";
import {Redirect} from "react-router-dom";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    };

    changePage = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {
        //поміняти редірект на /login
        if (!this.props.isAuth) return <Redirect to={`/users`}/>;
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null
                }
                <UsersDumb
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onChangePage={this.changePage}
                    users={this.props.users}
                    follow={this.props.followThisUserThunkCreator}
                    unfollow={this.props.unFollowThisUserThunkCreator}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    getMoreUsers={this.props.getMoreUsers}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.users.usersStore,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowingInProgress: state.users.isFollowingInProgress,
        isAuth: state.auth.isAuth,

    }
};


export default connect(mapStateToProps, {
    toggleFollowingProgress: toggleFollowingProgress,
    getUsersThunkCreator: getUsersThunkCreator,
    followThisUserThunkCreator: followThisUserThunkCreator,
    unFollowThisUserThunkCreator: unFollowThisUserThunkCreator,
    getMoreUsers: getMoreUsersThunkCreator
})(UsersContainer);



