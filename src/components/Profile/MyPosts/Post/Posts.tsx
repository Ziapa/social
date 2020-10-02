import React from "react";
import s from "./Posts.module.scss";
import { PostType } from "../../../../redux/state";


export const Posts = (props: PostType) => {
    return (
        <div className={s.post}>
            <header className={s.postHeader}>
                <div className={s.postHeaderName}>
                    {props.name}
                </div>
                <div className={s.postHeaderTime}>
                    {props.time}
                </div>
            </header>
            <div className={s.postInner}>
                <div>
                <img src={props.avatar} alt=""/>
                </div>
                <div className={s.postInnerText}>
                    {props.message}
                </div>
            </div>

            <div className={s.like}>{props.like} </div>


        </div>
    )
}