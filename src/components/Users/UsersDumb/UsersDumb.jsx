import React from "react";
import s from './UsersDumb.module.scss';
import {Link, NavLink} from "react-router-dom";
import UserAvatarPlaceholder from "../../Placeholders-etc/UserAvatarPlaceholder/UserAvatarPlaceholder";
// import Button from '@material-ui/core/Button';

import {Paginator} from "../../Placeholders-etc/Paginator/Paginator";
import {Button} from 'semantic-ui-react';

const UsersDumb = (props) => {
    const {
        users,
        followThisUserThunkCreator,
        unFollowThisUserThunkCreator,
        isFollowingInProgress,
        getMoreUsers,
    } = props;

    const onLoadMoreUsers = () => {
        getMoreUsers();
    };
    return (
        <div className={s.userWrapper}>
            <Paginator {...props} />
            {users.map(user => (
                    <div className={s.userItem} key={user.id}>
                        <div className={s.avaAndUserInfo}>
                            <NavLink className={s.userAvaWrapper} to={"/profile/" + user.id}>
                                {
                                    user.photos.small !== null
                                        ? <img className={s.userAvaImg} src={user.photos.small} alt=""/>
                                        : <UserAvatarPlaceholder/>
                                }
                            </NavLink>
                            <div className={s.userInfo}>
                                <Link to={"/profile/" + user.id}>
                                    <span className={s.nickName}>
                                    {user.name}
                                </span>
                                </Link>

                                <span className={s.status}>
                                    {user.status && <span>STATUS: {user.status}</span>}
                                </span>
                                <span className={s.status}>
                                    {user.id && <span>ID: {user.id}</span>}
                                </span>
                            </div>
                        </div>
                        <div className={s.buttons}>
                            <div className={s.followButtonWrapper}>
                                {user.followed
                                    ? <Button variant="contained"
                                              color="primary"
                                              disabled={isFollowingInProgress.some(id => id === user.id)}
                                              loading={isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => unFollowThisUserThunkCreator(user.id)}>
                                        Unfollow
                                        {/*{isFollowingInProgress.some(id => id === user.id) ? <CircularProgress color={"inherit"} /> : "Unfollow"}*/}
                                    </Button>
                                    : <Button variant="contained"
                                              color="grey"
                                              disabled={isFollowingInProgress.some(id => id === user.id)}
                                              loading={isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => followThisUserThunkCreator(user.id)}>
                                        Follow
                                        {/*{isFollowingInProgress.some(id => id === user.id) ? <CircularProgress color={"inherit"}/> : "Follow"}*/}
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                )
            )}


            <button className={s.getUsersButton} onClick={onLoadMoreUsers}>LOAD USERS</button>
            <Paginator {...props}/>
        </div>

    )
};
export default UsersDumb;