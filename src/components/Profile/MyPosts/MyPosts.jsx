import React from 'react'
import s from './MyPosts.module.scss';
import Post from './Post/Post.jsx'
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";

import {makeStyles} from "@material-ui/styles";
import {warn, validate} from "../../../common/validators/validators";
import {renderTextarea} from "../../Placeholders-etc/FormsControls/FormsControls";
import {Container, Item} from "semantic-ui-react";


const useStyles = makeStyles({
    root: {
        display: "flex",
        background: 'linear-gradient(45deg, #32988aa1 30%, #05b9b1c7 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(39, 146, 133, 0.3)',
        color: 'white',
        height: 55,
        padding: '0 30px',
        margin: "0.5em",
        alignSelf: "baseline"
    },

});

const MyPosts = (props) => {
    const addPost = (data) => {
        props.addPost(data.newPostBody);
        // clear text field
        data.newPostBody = '';
    };

    let posts = props.profilePage.postsData.map((p, i) => <Post
        id={p.id}
        likes={p.likes}
        text={p.postMessage}
        addOneLike={props.addOneLike}
        deletePost={props.deletePost}

        key={p.id}
    />);

    return (
        <Container textAlign={"left"} className={s.my_posts}>
            <div className={s.post_add}>
                <NewPostReduxFormMaterial onSubmit={addPost}/>
            </div>
            <Item.Group>
                {posts}
            </Item.Group>
        </Container>
    )
};

const MyMaterialPostsForm = (props) => {
    const classes = useStyles();

    return <form className={s.formBlock} onSubmit={props.handleSubmit}>
        <Field
            name="newPostBody" type="text"
            component={renderTextarea}
        />
        <Button className={classes.root} type="submit">
            Publish
        </Button>
    </form>
};



export const NewPostReduxFormMaterial = reduxForm({
    form: 'MaterialUiForm',
    validate: validate,
    warn: warn,
})(MyMaterialPostsForm);


export default MyPosts;