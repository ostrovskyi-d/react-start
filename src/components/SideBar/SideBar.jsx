import React from 'react';
import classes from './SideBar.module.scss';
import {NavLink} from 'react-router-dom'


const SideBar = () => {
    return (
        <aside>
            <menu>
                <ul>
                    <li className={classes.item}>
                        <NavLink activeClassName={classes.active} to="/profile">PROFILE</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink activeClassName={classes.active} to="/users">USERS</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink activeClassName={classes.active} to="/dialogs">MESSAGES</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink activeClassName={classes.active} to="/news">NEWS</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink activeClassName={classes.active} to="/music">MUSIC</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink activeClassName={classes.active} to="/settings">SETTINGS</NavLink>
                    </li>
                </ul>
            </menu>
        </aside>
    )
}


export default SideBar;