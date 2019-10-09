import React from 'react';
import s from './User.module.css';


const User = (props) => {
    console.log(props);
    let onFollowUserClick = () => {
        props.onFollowUserClick(props.id);
    };
    let onUnfollowUserClick = () => {
        props.unfollowUser(props.id);
    };

    return (
        <div className={s.userWrapper}>
            <section className={s.avaAndUserInfo}>
                <div className={s.userAva}>
                    AVATAR
                </div>
                <div className={s.userInfo}>
                    <h1>USERNAME: {props.nickName}</h1>
                    <p>STATUS: {props.status}</p>
                    <p>COUNTRY: {props.location.country}</p>
                    <p>CITY: {props.location.city}</p>
                </div>
            </section>
            <section className={s.buttons}>
                <div className={s.followButtonWrapper}>
                    {props.followed ? <button onClick={onUnfollowUserClick}>UNFOLLOW</button> : <button onClick={onFollowUserClick}>FOLLOW</button>}
                </div>
            </section>
        </div>
    );
};


export default User;