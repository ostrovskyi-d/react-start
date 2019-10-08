import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    
    let getId = () => {
        props.addLike(props.id);
    };

    return (
        <div className={classes.post_item}>

            <img
                className={classes.ava}
                src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png"
                alt=""
            />
            <section>
                <div className={classes.post_content}>
                    <p className={classes.post_title}/>
                    <div className={classes.post_message}>{props.text}</div>
                </div>
                <div onClick={getId} className={classes.post_like_button}>LIKES: {props.likes} </div>
            </section>


        </div>
    )
}


export default Post;