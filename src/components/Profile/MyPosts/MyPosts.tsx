import React from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props:MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Posts name={p.name}
                                            time={p.time}
                                            avatar={p.avatar}
                                            message={p.message} like={p.like}/>)

    return (<div className={s.myPosts}>
            <h3> my posts</h3>
            <div>        
                <div>
                <textarea placeholder={"text area"}></textarea>
                </div>
                <div>
                <button>add post</button>
                </div>
            </div>
            {postElement}
        </div>
    )
}