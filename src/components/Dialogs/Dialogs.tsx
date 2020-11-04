import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.scss";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./Message/MessageItem";
import { DialogsPageType} from "../../redux/store";

type DialogsType = {
    dialogs: DialogsPageType
    error:string | null
    addPost:()=> void
    addTextMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Dialogs = (props: DialogsType) => {


    let dialogElement = props.dialogs.dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.dialogs.message.map(message => <MessageItem message={message.message}/>)
    let textAddPost = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
                <div className={s.addPost}>
                    <textarea className={props.error ? s.error : ""}
                              value={props.dialogs.textAddMessage}
                              onChange={props.addTextMessage}
                              ref={textAddPost}> </textarea>
                    <button onClick={props.addPost}>add post</button>
                    {props.error && <div className={s.errorMessage}>{props.error}</div>}
                </div>
            </div>
        </div>
    )
}