
import {connect} from "react-redux";
import {
    changePageAC,
    followThisUserAC, setTotalUsersCountAC,
    setUsersAC,
    showMoreUsersAC,
    unfollowThisUserAC
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import UsersDumb from "./UsersDumb/UsersDumb";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    changePage = (p) => {
        this.props.changePage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);

            });
    };

    render() {

        return (
            <UsersDumb
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangePage={this.changePage}
                users={this.props.users}

                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.users.usersStore,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userID) => {
            let action = followThisUserAC(userID);
            return dispatch(action);
        },
        unfollowUser: (userID) => {
            let action = unfollowThisUserAC(userID);
            return dispatch(action);
        },
        setUsers: (usersStore) => {
            dispatch(setUsersAC(usersStore));
        },
        showMoreUsers: () => {
            let action = showMoreUsersAC();
            dispatch(action);
        },
        changePage: (pageNumber) => {
            let action = changePageAC(pageNumber);
            dispatch(action);
        },
        setTotalUsersCount: (count) => {
            let action = setTotalUsersCountAC(count);
            dispatch(action);
        }
    }

};

let Users = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


export default Users;



