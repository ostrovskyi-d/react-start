import MyPosts from "./MyPosts";
import {addOneLike, addPost, deletePostThunk} from "../../../redux/profile-reducer";
import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};

let MyPostsContainer = connect(mapStateToProps, {addOneLike, addPost, deletePost: deletePostThunk})(MyPosts);
export default MyPostsContainer