import React from "react";
import s from "./../Dialogs.module.scss";

type MessageType = {
    message:string
}

export const MessageItem = (props: MessageType) => {
    return (
        <div className={s.messageItem} >
            {props.message}
        </div>
    )
}
