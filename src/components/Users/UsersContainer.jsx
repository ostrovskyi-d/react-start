import Users from "./Users";
import {connect} from "react-redux";
import {followThisUserAC, setUsersAC, showMoreUsersAC, unfollowThisUserAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.users.usersStore
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
        }
    }

};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;



