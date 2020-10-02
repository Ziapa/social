import React from "react";
import s from "./Dialogs.module.scss";
import { DialogItem } from "./Dialog/DialogItem";
import { MessageItem } from "./Message/MessageItem";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    dialogs: DialogsPageType
}

export const Dialogs = (props: DialogsType) => {

    let dialogElement = props.dialogs.dialog.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.dialogs.message.map( message => <MessageItem message={message.message}/>)

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