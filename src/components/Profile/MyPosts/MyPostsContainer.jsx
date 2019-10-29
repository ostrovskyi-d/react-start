// import React from 'react';

import MyPosts from "./MyPosts";
import {addOneLikeAC, addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux"



let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

        updateNewPostText: (newText) => {
            let action = updatePostTextAC(newText);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostAC();
            dispatch(action);
        },
        addLike: (id) => {
            let action = addOneLikeAC(id);
            dispatch(action);
        }

    }
};
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer