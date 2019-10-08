import React from 'react';
import ProfileInfo from './Profile-info/ProfileInfo.jsx'
import './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    );
};
export default Profile;