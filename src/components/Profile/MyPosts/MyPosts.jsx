import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
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
            <div className={classes.post_add}>
                <NewPostReduxForm onSubmit={props.addPost}/>
            </div>
            {posts}
        </div>
    )
};

const MyPostsForm = (props) => {


    return <form>
        <div className={classes.group}>
            <Field component={"textarea"} name={"newPostBody"} required/>
            <span className={classes.bar}/>
            {/*<label>INPUT POST TEXT</label>*/}
        </div>
        <Field
            component={"submit"}
            name={"sendNewPost"}
            className={classes.sendPostButton}
            value="Send"
            // onSubmit={onAddPost}
            type="submit"
        >
            Send
        </Field>
    </form>
};

export const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(MyPostsForm);



export default MyPosts;