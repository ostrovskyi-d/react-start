import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
<<<<<<< HEAD
    // console.log(props)

    let state = props.profilePage;


    let onAddPost = (e) => {
        props.addPost();
    };
    let onPostChange = (e) => {
        let newText = e.target.value;
        props.updateNewPostText(newText);
    };



    let posts = state.postsData.map(p => (
            <Post
                id={p.id}
                likes={p.likes}
                text={p.postMessage}
                addLike={props.addLike}
            />
        )
    );
=======
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


>>>>>>> 35501aee448360699b37b9e0a06a091486800594
    return (
        <div className={classes.my_posts}>
            <h3>WALL:</h3>
            <div className={classes.post_add}>
<<<<<<< HEAD
                
                <textarea
                    onChange={onPostChange}
                    // ref={newPostElement}
                    value={state.changeAblePostText}
                />

                <input
                    value="SEND"
                    type="submit"
                    onClick={onAddPost}
=======
                <textarea
                    onChange={onTextChange}
                    value={props.state.profilePage.changeAblePostText}
                    ref={newPostElement}
>>>>>>> 35501aee448360699b37b9e0a06a091486800594
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