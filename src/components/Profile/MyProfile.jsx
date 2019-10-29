import React from 'react';
import ProfileInfo from './MyProfileInfo/MyProfileInfo.jsx'
import './MyProfile.module.scss'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Placeholders-etc/Preloader/Preloader";
import s from './MyProfile.module.css'
import {Redirect} from "react-router-dom";

const MyProfile = (props) => {
    if (!props.userData) {
        return <Preloader/>
    }

    return (
        <main className={s.profilePageWrapper}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </main>
    );

};
export default MyProfile;