import React from 'react';
import MyPosts from "./MyPosts";
import {addOneLikeCreator, addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


const MyPostsContainers = () => {
    let addPost = () => {
        let action = addPostCreator();
        store.dispatch(action);
    };
    let updatePostText = (newText) => {
        let action = updatePostTextCreator(newText);
        store.dispatch(action);
    };
    let addLike = (id) => {
        let action = addOneLikeCreator(id);
        store.dispatch(action);
    };


    return (
        <MyPosts
            profilePage={state.profilePage}
            updateNewPostText={updatePostText}
            addPost={addPost}
            addLike={addLike}
        />
    );
};
let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            let action = updatePostTextCreator(newText);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostCreator();
            dispatch(action);
        },
        addLike: (id) => {
            let action = addOneLikeCreator(id);
            dispatch(action);
        }

    }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;