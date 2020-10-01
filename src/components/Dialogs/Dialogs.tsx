import React from "react";
import s from "./Dialogs.module.scss";
import { DialogItem } from "./Dialog/DialogItem";
import { MessageItem } from "./Message/MessageItem";
import {DialogsType, MessagesType} from "../../App";



type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}




export const Dialogs = (props: DialogsPropsType) => {

    let dialogElement = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.messages.map( message => <MessageItem message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
            </div>
        </div>
    )
}