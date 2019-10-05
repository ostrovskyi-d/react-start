import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './Profile-info/ProfileInfo.jsx'
import './Profile.module.css'



const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts 
                dispatch={props.dispatch}
                state = {props.state}
            />
            
        </main>
    )
}



export default Profile;