import React from "react";
import s from './UsersDumb.module.css';
import {NavLink} from "react-router-dom";
import UserAvatarPlaceholder from "../../Placeholders-etc/UserAvatarPlaceholder/UserAvatarPlaceholder";
import Button from '@material-ui/core/Button';
import {Container, Select} from "semantic-ui-react";

const UsersDumb = (props) => {
    const {
        totalUsersCount,
        pageSize,
        requiredPage,
        changePage,
        users,
        followThisUserThunkCreator,
        unFollowThisUserThunkCreator,
        isFollowingInProgress,
        getMoreUsers,
        setPageSize
    } = props;
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages[i] = i;
    }
    pages = pages.map((p, i) => {
            return (
                <span key={i}
                      onClick={() => changePage(p)}
                      className={requiredPage === p ? s.selectedPage : undefined}>
                    {p}
                </span>
            )
        }
    );


    const pageSizeOptions = [
        {key: 10, value: 10, text: 10},
        {key: 20, value: 20, text: 20},
        {key: 30, value: 30, text: 30},
        {key: 50, value: 50, text: 50},
    ];
    const onLoadMoreUsers = () => {
        getMoreUsers();
    };
    const onSelectChange = (e) => {
        setPageSize(Number(e.target.innerText))
    };
    return (
        <div className={s.userWrapper}>
            <div className={s.pagesBlock}>
                {/*цей wrapper - з overflow hidden - костиль (забрати overflow hidden і подивитися чому)*/}
                <span className={s.pagesWrapper}>
                    {pages}
                    </span>
            </div>
            <Container>
                <div className={s.viewSettings}>
                    <p>Total users count: {totalUsersCount}</p>
                    <p>Users per page:</p>
                    <Select onChange={onSelectChange} className={s.choosePageSize} options={pageSizeOptions} defaultValue={pageSize}/>
                </div>
            </Container>

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
                                    ? <Button variant="contained"
                                              color="primary"
                                              disabled={isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => unFollowThisUserThunkCreator(user.id)}>
                                        Unfollow
                                    </Button>
                                    : <Button variant="contained"
                                              color="primary"
                                              disabled={isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => followThisUserThunkCreator(user.id)}>
                                        Follow
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                )
            )}
            <button className={s.getUsersButton} onClick={onLoadMoreUsers}>LOAD USERS</button>


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