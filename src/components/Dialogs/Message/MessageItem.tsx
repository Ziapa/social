import React from "react";
import s from "./../Dialogs.module.scss";


export const MessageItem = (props: { message: string }) => {
    return (
        <div className={s.messageItem} >
            {props.message}
        </div>
    )
}
