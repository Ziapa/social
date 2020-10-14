import React, {ChangeEvent, useState} from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    message: string
    textAddPost: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let [error, setError] = useState<string | null>(null)
    const addPost = () => {
        if (props.message.trim()) {
            props.addPost()
        } else {
            setError("Необходимно ввести текст")
        }

    }
    const textAddPost = (e: ChangeEvent<HTMLTextAreaElement>) => props.textAddPost(e.currentTarget.value)


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