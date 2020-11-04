import React, {ChangeEvent, useState} from "react";
import {addPostAC, textAddPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ActionType, PostType} from "../../../redux/store";


type MyPostsContainerPropsType = {
    message: string
    posts: Array<PostType>
    dispatch: (action: ActionType) => void
}


export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let [error, setError] = useState<string | null>(null)
    const addPost = () => {
        if (props.message.trim()) {
            props.dispatch(addPostAC())
        } else {
            setError("Необходимно ввести текст")
        }

    }
    const textAddPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(textAddPostAC(text))
    }


    return (<MyPosts
            error={error}
            addPost={addPost}
            posts={props.posts}
            message={props.message}
            updateNewPostText={textAddPost}
        />
    )
}