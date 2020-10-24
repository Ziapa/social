import React, {ChangeEvent, useState} from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";
import {ActionType, addPostAC, PostType, textAddPostAC} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionType) => void
    message: string

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
        if (props.message.trim()) {
            props.dispatch(addPostAC())
        } else {
            setError("Необходимно ввести текст")
        }

    }
    const textAddPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        // let action = {type: "TEXT-ADD-POST", newText: text}
        props.dispatch(textAddPostAC(text))
        // props.dispatch(action)
    }

    let postElement = props.posts.map(p => <Posts name={p.name}
                                                  time={p.time}
                                                  avatar={p.avatar}
                                                  message={p.message} like={p.like}/>)

    return (<div className={s.myPosts}>
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea
                        className={error ? s.error : ""}
                        value={props.message}
                        onChange={textAddPost}
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