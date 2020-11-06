import React, {ChangeEvent, useState} from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";
import {PostType} from "../../../redux/store";


type MyPostsPropsType = {
    message: string
    addPost: () => void
    posts: Array<PostType>
    updateNewPostText: (text: string) => void
}

// let addPostActionCreator = () => {
//     return {
//         type: "TEXT-ADD-POST",
//         newText: text
//     }
// }

export const MyPosts = (props: MyPostsPropsType) => {

    let [error, setError] = useState<string | null>(null)
    const addPost = () => {
        debugger
        if (props.message.trim()) {
            props.addPost()
        } else {
            setError("Необходимно ввести текст")
        }
    }
    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    let postElement = props.posts.map(p => <Posts
        name={p.name}
        time={p.time}
        avatar={p.avatar}
        message={p.message}
        like={p.like}/>)

    return (<div className={s.myPosts}>
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea
                        className={error ? s.error : ""}
                        value={props.message}
                        onChange={updateNewPostText}
                        placeholder={"AddPost"}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post
                    </button>
                    {error && <div className={s.errorMessage}>{error}</div>}
                </div>
            </div>
            {postElement}
        </div>
    )
}