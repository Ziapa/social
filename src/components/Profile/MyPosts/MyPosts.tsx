import React from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";
import {PostType} from "../../../redux/store";


type MyPostsPropsType = {
    message: string
    addPost: ()=> void
    error:string | null
    posts:Array<PostType>
    updateNewPostText:(e: React.ChangeEvent<HTMLTextAreaElement>)=> void
}

// let addPostActionCreator = () => {
//     return {
//         type: "TEXT-ADD-POST",
//         newText: text
//     }
// }

export const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Posts name={p.name}
                                                  time={p.time}
                                                  avatar={p.avatar}
                                                  message={p.message} like={p.like}/>)

    return (<div className={s.myPosts}>
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea
                        className={props.error ? s.error : ""}
                        value={props.message}
                        onChange={props.updateNewPostText}
                        placeholder={"AddPost"}
                    />
                </div>
                <div>
                    <button onClick={props.addPost}>add post
                    </button>
                    {props.error && <div className={s.errorMessage}>{props.error}</div>}
                </div>
            </div>
            {postElement}
        </div>
    )
}