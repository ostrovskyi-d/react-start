import React from 'react';
import User from "./User/User";
import s from "./User/User.module.css";


const Users = (props) => {
    let state = props.users.usersStore;

    let onFollowUserClick = (state, buttonValue) => {
        props.followUser(state, buttonValue);
    };
    let onShowMoreUsersClick = () => {
        props.showMoreUsers();
    };


    let users = state.map(u => {
            return <User
                id={u.id}
                nickName={u.nickName}
                status={u.status}
                location={u.location}
                followed={u.followed}
                buttonValue={u.followed ? u.buttonValue = "Unfollow" : "Follow"}
                onFollowUserClick={onFollowUserClick}
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



