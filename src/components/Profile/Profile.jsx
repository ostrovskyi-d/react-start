import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './Profile-info/ProfileInfo.jsx'
import './Profile.module.css'


const Profile = (props) => {


    return (
        <main>
            <ProfileInfo/>
                <MyPostsContainer
                    // store={props.store}
                />

        </main>
    )
};


export default Profile;