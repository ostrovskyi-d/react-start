// import Users from "./Users";
// import {connect} from "react-redux";
// import {followThisUserCreator, showMoreUsersCreator} from "../../redux/users-reducer";
//
//
// let mapStateToProps = (state) => {
//     return {
//         users: state.users
//     }
// };
//
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (id) => {
//             let action = followThisUserCreator(id);
//             dispatch(action);
//         },
//         showMoreUsers: () => {
//             let action = showMoreUsersCreator();
//             dispatch(action);
//         }
//     }
//
// };
//
// let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
//
//
// export default UsersContainer;
//
//
//
