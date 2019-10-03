import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
    let savedPostData = React.createRef();
    
    let addPost = () => {
        let text = savedPostData.current.value;
        alert(text);
    }
    
    let posts = props.postsData.map(p => <Post likes={p.likes} text={p.postMessage} />)
    

    return (
        <div className={classes.my_posts}>
            <h3>WALL:</h3>
            <div className={classes.post_add}>
                <textarea ref={savedPostData} type="text" />
                <input onClick={addPost} value="SEND" type="submit" />
            </div>
            {posts}
        </div>
    )
}



export default MyPosts;