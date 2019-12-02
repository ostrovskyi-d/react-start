import MyPosts from "./MyPosts";
import {addOneLike, addPost, deletePost} from "../../../redux/profile-reducer";
import {connect} from "react-redux"


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};

let MyPostsContainer = connect(mapStateToProps, {addOneLike, addPost, deletePost})(MyPosts);
export default MyPostsContainer