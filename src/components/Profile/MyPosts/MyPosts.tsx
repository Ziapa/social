import React from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
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
            <Posts name={"Shana"}
                   time={"10:43"}
                   avatar={"https://www.blexar.com/avatar.png"}
                   message={"privet"} like={123}
                   />

            <Posts name={"Dart"}
                   time={"13:54"}
                   avatar={"https://html5css.ru/w3css/img_avatar3.png"}
                   message={"bye"} like={12}
                   />
        </div>
    )
}