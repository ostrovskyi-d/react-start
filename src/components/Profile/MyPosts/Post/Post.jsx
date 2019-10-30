import React from 'react';
import classes from './Post.module.scss';
import styled from "styled-components";

const Post = (props) => {

    let getId = () => {
        props.addLike(props.id);
    };
    const LikesCounterButton = styled.span`
        display: flex;
          ::after {
             content: ' ${props.likes}';
           }
    `;

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
                <div className={classes.likes}>
                    <LikesCounterButton className={classes.post_like_button} onClick={getId}>Like </LikesCounterButton>
                </div>
            </section>
        </div>
    )
};


export default Post;