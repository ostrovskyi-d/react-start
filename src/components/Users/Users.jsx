import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
            id: 1,
            nickName: "NickName",
            status: "away from keyboard",
            location: {
                country: "Ukraine",
                city: "Kiev"
            },
            followed: false,
        },
            {
                id: 2,
                nickName: "NickName2",
                status: "away from brain",
                location: {
                    country: "Russia",
                    city: "Moscow"
                },
                followed: true,
            },
            {
                id: 3,
                nickName: "NickName3",
                status: "away from mouse",
                location: {
                    country: "Belarus",
                    city: "Minsk"
                },
                followed: false,
            },
            {
                id: 4,
                nickName: "NickName3",
                status: "away from mouse",
                location: {
                    country: "Belarus",
                    city: "Minsk"
                },
                followed: false,
            },
            {
                id: 5,
                nickName: "Anastasia",
                status: "away from hell",
                location: {
                    country: "Arstotzka",
                    city: "Greshtyn"
                },
                followed: true,
            },
            {
                id: 6,
                nickName: "Azaza",
                location: {
                    country: "Turkey",
                    city: "Stambul"
                },
                status: "away from heaven",
                followed: false
            }]);
    }

    return (
        props.users.map(user => (

                <div className={s.userWrapper} key={user.id}>
                    <div className={s.avaAndUserInfo}>
                        <div className={s.userAva}>
                            AVATAR
                        </div>
                        <div className={s.userInfo}>
                        <span className={s.nickName}>
                            {user.nickName}
                        </span>
                            <div className={s.location}>
                                <span> Country: {user.location.country} </span>
                                <span> City: {user.location.city} </span>
                            </div>
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
            )
        )
)
};
export default Users;



