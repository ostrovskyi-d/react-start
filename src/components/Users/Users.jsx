// import React from 'react';
// import User from "./User/User";
//
//
// const Users = (props) => {
//     let state = props.users;
//
//     console.log(state);
//     let onFollowUserClick = () => {
//         let userID = "1";
//         props.followUser(userID);
//     };
//     let onShowMoreUsersClick = () => {
//         props.showMoreUsers();
//     };
//
//     let users = state.map(u => (
//         <User
//             id={u.id}
//             nickname={u.nickName}
//             status={u.status}
//             location={u.location}
//         />
//     ));
//
//
//     return (
//         <section>
//             <div>
//                 {users}
//             </div>
//
//
//             <input onClick={onFollowUserClick} type="submit"/>
//             <input onClick={onShowMoreUsersClick} type="submit"/>
//         </section>
//     )
// };
//
//
// export default Users;
//
//
//
