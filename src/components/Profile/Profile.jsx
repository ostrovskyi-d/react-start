import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './Profile-info/ProfileInfo.jsx'
import './Profile.module.css'


const Profile = (props) => {
<<<<<<< HEAD


    return (
        <main>
            <ProfileInfo/>
                <MyPostsContainer
                    // store={props.store}
                />

=======
    return (
        <main>
            <ProfileInfo />
            <MyPosts 
                dispatch={props.dispatch}
                state = {props.state}
            />
            
>>>>>>> 35501aee448360699b37b9e0a06a091486800594
        </main>
    )
};


export default Profile;