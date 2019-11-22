import React from 'react';
import styles from './Post.module.scss'
import 'semantic-ui-css/semantic.min.css'
import {Button, Icon, Item, Label} from 'semantic-ui-react'

const Post = (props) => {
    const {text, likes} = props;
    let getId = () => {
        props.addLike(props.id);
    };
    return (
        <>
            <Item className={styles.postItem}>
                <Item.Image size='small'
                            src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png'/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>Post Title</Item.Header>
                    <Item.Description>{text}</Item.Description>
                    <Item.Extra>
                        <Button as='div' labelPosition='right'>
                            <Button onClick={getId} icon>
                                <Icon color="red" name='heart'/>
                            </Button>
                            <Label as='a' basic pointing='left'>
                                {likes}
                            </Label>
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </>
    )
};


export default Post;
