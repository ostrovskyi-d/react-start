import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const Header = (props) => {
    const {userId, isAuth, login, email, logOutThunkCreator} = props;
    return (
        <header className={s.headerBar}>
            <div className={s.headerBackground}>
                {/*<img src="https://secure.meetupstatic.com/photos/event/1/c/b/8/600_475147352.jpeg" alt=""/>*/}
                <div className={s.loginBlock}>
                    {isAuth
                        ? <div className={s.loggedInHeaderBlock}>
                            <Button color={'default'} component={"button"} variant={"outlined"}
                                    className={s.logOutButton} onClick={logOutThunkCreator}>
                                Log Out
                                {/*<NavLink to={'/login'}>  </NavLink>*/}
                            </Button>
                            <div>
                                <p className={s.myLogin}>Your login: {login}</p>
                                <a className={s.mailToLink} href={`mailto:${email}`}>Your email: {email}</a>
                            </div>
                            <p style={{textDecoration: "underline"}}>ID:{userId}</p>
                        </div>
                        : <NavLink className={s.notLoggedIn} to={'/login'}>
                            log in
                        </NavLink>
                    }

                </div>
            </div>

        </header>
    )
};


export default Header;