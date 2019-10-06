import React from 'react';
import MyPosts from "./MyPosts";
import {addOneLikeCreator, addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            { (store) => {
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
                    profilePage={store.getState().profilePage}
                    updateNewPostText={updatePostText}
                    addPost={addPost}
                    addLike={addLike}
                />
            )
        }}
        </StoreContext.Consumer>
    )
};


export default MyPostsContainer;