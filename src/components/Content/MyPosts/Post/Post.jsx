import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {


    return (
        <div className={classes.post_item}>
            
            <img 
                className={classes.ava} 
                src="https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png" 
                alt=""
            />

                <div className={classes.post_content}>
                    <p className={classes.post_title}></p>
                    <div className={classes.post_message}>{props.text}</div>
                    <div className={classes.post_like_button} >LIKES: {props.likes} </div>
                </div>
                 

            
        </div>
    )
}



export default Post;