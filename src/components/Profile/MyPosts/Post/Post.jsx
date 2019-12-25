import React, {useState} from 'react';
import styles from './Post.module.scss'
import 'semantic-ui-css/semantic.min.css'
import {Button, Header, Icon, Item, Label, Modal} from 'semantic-ui-react'

// Have a bug with adding and removing check it
const Post = React.memo((props) => {
    const {text, likes, addOneLike, deletePost} = props;

    const getId = () => addOneLike(props.id);
    const onPostDelete = () => deletePost(props.id);
    return (
        <>
            <Item className={styles.postItem}>
                <Item.Image size='small'
                            src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png'/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>Post Title</Item.Header>
                    <Item.Description>{text}</Item.Description>
                    <Item.Extra>
                        <div className={styles.buttons}>
                            <Button as='div' labelPosition='right'>
                                <Button onClick={getId} icon>
                                    <Icon color="red" name='heart'/>
                                </Button>
                                <Label as='a' basic pointing='left'>
                                    {likes}
                                </Label>
                            </Button>
                            <Modal
                                closeIcon
                                trigger={
                                    <Button
                                        className={styles.removePostBtn}
                                        size={"medium"}
                                        color={"red"} circular>Remove
                                    </Button>} basic size='small'
                            >
                                <Header icon='archive'
                                        content='Delete this post?'/>
                                <Modal.Content>
                                    <p>
                                        This operation irreversible. You will not restore this post anymore. <br/>
                                        <br/>
                                        Are your really want to make that decision?
                                    </p>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button negative basic color='red' inverted>
                                        <Icon name='remove'/> No
                                    </Button>
                                    <Button onClick={onPostDelete} color='green' inverted>
                                        <Icon name='checkmark'/> Yes
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        </div>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </>
    )
});


export default Post;
