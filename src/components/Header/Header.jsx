import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const Header = (props) => {
    return (
        <header className={s.headerBar}>

            {/*<img src="https://secure.meetupstatic.com/photos/event/1/c/b/8/600_475147352.jpeg" alt=""/>*/}
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div className={s.loggedInHeaderBlock}>
                            <Button color={'default'} component={"button"} variant={"outlined"} className={s.logOutButton} onClick={props.logOutThunkCreator}>
                                Log Out
                                {/*<NavLink to={'/login'}>  </NavLink>*/}
                            </Button>
                            <div>
                                <p className={s.myLogin}>Your login: {props.login}</p>
                                <a className={s.mailToLink} href={`mailto:${props.email}`}>Your email: {props.email}</a>
                            </div>

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