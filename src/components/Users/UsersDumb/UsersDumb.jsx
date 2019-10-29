import React from "react";
import s from './../Users.module.css';
import {NavLink, Redirect} from "react-router-dom";
import UserAvatarPlaceholder from "../../Placeholders-etc/UserAvatarPlaceholder/UserAvatarPlaceholder";

const UsersDumb = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages[i] = i;
    }

    pages = pages.map(p => {
            return <a
                onClick={() => props.onChangePage(p)}
                className={props.currentPage === p && s.selectedPage}>
                {p}
            </a>
        }
    );

    return (
        <div className={s.userWrapper}>

            <button className={s.getUsersButton} onClick={props.getUsers}>LOAD USERS</button>
            <div className={s.pagesBlock}>
                {/*цей wrapper - з overflow hidden - костиль (забрати overflow hidden і подивитися чому)*/}
                <span className={s.pagesWrapper}>
                    {pages}
                    </span>
            </div>
            {props.users.map(user => (
                    <div className={s.userItem} key={user.id}>
                        <div className={s.avaAndUserInfo}>
                            <NavLink to={"/profile/" + user.id}>
                                {
                                    user.photos.small !== null
                                        ? <img className={s.userAva} src={user.photos.small} alt=""/>
                                        : <UserAvatarPlaceholder/>
                                }
                            </NavLink>

                            <div className={s.userInfo}>
                                <span className={s.nickName}>
                                    {user.name}
                                </span>
                                <span className={s.status}>
                                    STATUS: {user.status}
                                </span>
                            </div>
                        </div>
                        <div className={s.buttons}>
                            <div className={s.followButtonWrapper}>
                                {user.followed
                                    ? <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => props.unfollow(user.id)}>
                                        UNFOLLOW
                                    </button>
                                    : <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => props.follow(user.id)}>
                                        FOLLOW
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                )
            )}
            <div className={s.pagesBlock}>
                {/*цей wrapper - з overflow hidden - костиль (забрати overflow hidden і подивитися чому)*/}
                <span className={s.pagesWrapper}>
                    {pages}
                    </span>
            </div>
        </div>

    )
};
export default UsersDumb;