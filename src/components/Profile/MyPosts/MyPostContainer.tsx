import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/store";
import {connect} from "react-redux";



let mapSateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.changeTextNewPost
    }
}



export const MyPostsContainer = connect(mapSateToProps, {addPost, updateNewPostText })(MyPosts);