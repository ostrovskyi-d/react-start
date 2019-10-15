import React from 'react';
import s from './Users.module.css';
import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        const getUsers = (count = 3) => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`).then(response => {
                console.log(response.data);
                return props.setUsers(response.data.items);
            });
        }
        getUsers()
    }
    //  {
    //      id: 1,
    //      nickName: "NickName",
    //      status: "away from keyboard",
    //      followed: false,
    //  },

    return (

        (props.users.map(user => (
            <div className={s.userWrapper} key={user.id}>
                <div className={s.avaAndUserInfo}>
                    <div className={s.userAva}>
                        AVATAR
                    </div>
                    <div className={s.userInfo}>
                        <span className={s.nickName}>
                            {user.name}
                        </span>
                        <span className={s.status}>STATUS: {user.status}</span>
                    </div>
                </div>
                <div className={s.buttons}>
                    <div className={s.followButtonWrapper}>
                        {user.followed
                            ? <button onClick={() => {
                                props.unfollowUser(user.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                props.followUser(user.id)
                            }}>FOLLOW</button>
                        }
                    </div>
                </div>
            </div>
        ))
    )
)
};
export default Users;



