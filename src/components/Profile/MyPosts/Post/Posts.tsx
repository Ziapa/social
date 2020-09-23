import React from "react";
import s from "./Posts.module.scss";

type PostsType = {
    name: string
    time: string
    avatar: string
    message: string
    like: number
    from: string
}

export const Posts = (props: PostsType) => {
    return (
        <div className={`${s.post} ${s.from_me}`}>
            <header className={s.post__header}>
                <div className={s.post__header_name}>{props.name}</div>
                <div className={s.post__header_time}>{props.time}</div>
            </header>
            <div className={s.post__inner}>
                <img src={props.avatar} alt=""/>
                <div className={s.post__inner_text}>{props.message}
                </div>
            </div>

            <div>{props.like} </div>


        </div>
    )
}