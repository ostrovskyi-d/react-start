// import React from 'react';

import MyPosts from "./MyPosts";
import {addOneLikeCreator, addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux"



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
export default MyPostsContainer