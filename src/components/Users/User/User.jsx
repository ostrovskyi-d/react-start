import React from 'react';
import s from './User.module.css';


const User = (props) => {


    let onFollowUserClick = (e) => {

        let buttonValue = e.target.value;
        props.onFollowUserClick(props, buttonValue);
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
                    <input value={props.buttonValue} onClick={onFollowUserClick} type="submit"/>
                </div>
            </section>
        </div>
    );
};


export default User;