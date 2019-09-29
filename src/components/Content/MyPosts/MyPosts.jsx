import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post likes={p.likes} text={p.postMessage} />)
    return (
        <div className={classes.my_posts}>
            <h3>WALL:</h3>
            <div className={classes.post_add}>
                <textarea type="text" />
                <input value="SEND" type="submit" />
            </div>
            {posts}
        </div>
    )
}



export default MyPosts;