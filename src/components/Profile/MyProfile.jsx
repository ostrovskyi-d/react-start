import React from 'react';
import ProfileInfo from './MyProfileInfo/ProfileInfo.jsx'
import './MyProfile.module.scss'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Placeholders-etc/Preloader/Preloader";
import s from './MyProfile.module.css'

const MyProfile = (props) => {
    if (!props.userData) {
        return <Preloader/>
    }
    return (
        <main className={s.profilePageWrapper}>
            <ProfileInfo userId={props.userId}  {...props}/>
            <MyPostsContainer/>
        </main>
    );

};
export default MyProfile;