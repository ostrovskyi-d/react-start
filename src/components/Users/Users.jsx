import React from 'react';
import User from "./User/User";
import s from "./User/User.module.css";


const Users = (props) => {
    let state = props.users;

    let onFollowUserClick = (userID) => {
        props.followUser(userID);
    };
    let onShowMoreUsersClick = () => {
        props.showMoreUsers();
    };
    let onUnfollowUserClick = (userID) => {
        props.unfollowUser(userID)
    };
    // debugger
    let users = state.map(u => {
            return <User
                id={u.id}
                nickName={u.nickName}
                status={u.status}
                location={u.location}
                followed={u.followed}
                onFollowUserClick={onFollowUserClick}
                unfollowUser={onUnfollowUserClick}
                onShowMoreUsersClick={onShowMoreUsersClick}
            />
        }
    );

    return (
        <section>
            <div>
                {users}
            </div>
            <div className={s.showMoreButtonWrapper}>
                <input onClick={props.onShowMoreUsersClick} type="submit"/>
            </div>


        </section>
    )
};


export default Users;



