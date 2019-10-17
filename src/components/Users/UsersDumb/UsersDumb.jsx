import React from "react";
import s from './../Users.module.css';

const UsersDumb = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages[i] = i;
    }
    return (
        <div className={s.userWrapper}>
            {/*<h2>{props.totalUsersCount}</h2>*/}
            <button className={s.getUsersButton} onClick={props.getUsers}>LOAD USERS</button>
            <div>
                    <span>
                        {pages.map(p => {
                                return <a
                                    onClick={(event) => props.onChangePage(p)}
                                    className={props.currentPage === p && s.selectedPage}>
                                    {p}
                                </a>
                            }
                        )
                        }
                    </span>
            </div>
            {props.users.map(user => (
                    <div className={s.userItem} key={user.id}>
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
                )
            )}
        </div>

    )
};
export default UsersDumb;