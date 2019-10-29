import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {

    let onAddPost = (e) => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let newText = e.target.value;
        props.updateNewPostText(newText);
    };


    let posts = props.profilePage.postsData.map((p, i) => (
            <Post
                id={p.id}
                likes={p.likes}
                text={p.postMessage}
                addLike={props.addLike}
                key={p.id}
            />
        )
    );

    return (
        <div className={classes.my_posts}>
            {/*<h3>WALL:</h3>*/}
            <div className={classes.post_add}>

                <div className={classes.group}>
                    <input value={props.profilePage.changeAblePostText} onChange={onPostChange} required/>
                    <span className={classes.bar}/>
                    <label>INPUT POST TEXT</label>
                </div>

                <input
                    className={classes.sendPostButton}
                    value="Send"
                    type="submit"
                    onClick={onAddPost}
                />
            </div>
            {posts}
        </div>
    )
};


export default MyPosts;