import React from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";

export const MyPosts = () => {

    let posts = [
        {name:"Shana", time:"10:00", avatar: "https://www.blexar.com/avatar.png", message: "privet", like: 12},
        {name:"Dart", time:"10:23", avatar: "https://html5css.ru/w3css/img_avatar3.png", message: "bye", like: 25}
    ]

    let postElement = posts.map(p => <Posts name={p.name}
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