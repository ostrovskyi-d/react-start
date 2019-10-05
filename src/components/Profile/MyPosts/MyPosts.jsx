import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
    // console.log(props.state.profilePage)
    let posts = props.state.profilePage.postsData.map((p) => {
        return (
            <Post
                dispatch={props.dispatch}
                id={p.id}
                likes={p.likes}
                text={p.postMessage}
            />
        )
    });
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    };

    let onTextChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-POST-TEXT", newText: text});
    };


    return (
        <div className={classes.my_posts}>
            <h3>WALL:</h3>
            <div className={classes.post_add}>
                <textarea
                    onChange={onTextChange}
                    value={props.state.profilePage.changeAblePostText}
                    ref={newPostElement}
                />

                <input
                    value="SEND"
                    type="submit"
                    onClick={addPost}
                />
            </div>

            {posts}

        </div>
    )
};


export default MyPosts;