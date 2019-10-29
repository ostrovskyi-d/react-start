import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.headerBar}>
            <img src="https://secure.meetupstatic.com/photos/event/1/c/b/8/600_475147352.jpeg" alt=""/>
            <div className={s.loginBlock}>
                {
                    props._isAuth
                        ? <div className={s.loggedInHeaderBlock}>
                            <p className={s.myLogin}>Your login: {props.login}</p>
                            <a className={s.mailToLink} href={`mailto:${props.email}`}>Your email: {props.email}</a>
                        </div>
                        : <NavLink className={s.notLoggedIn} to={'/login'}>
                            log in
                        </NavLink>
                }

            </div>
        </header>
    )
};


export default Header;