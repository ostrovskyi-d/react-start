import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'



const MyPosts = (props) => {
    // console.log(props.state.profilePage)
    // console.log(props.addPost)
    let posts = props.state.profilePage.postsData.map(p => <Post likes={p.likes} text={p.postMessage} />)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost();
        props.updatePostText('');
    }

    let onTextChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }
    
    
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
}



export default MyPosts;