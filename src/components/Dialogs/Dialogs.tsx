import React, {ChangeEvent, useState} from "react";
import s from "./Dialogs.module.scss";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./Message/MessageItem";
import {DialogsPageType} from "../../redux/store";

type DialogsType = {
    dialogs: DialogsPageType
    addPost: () => void
    addTextMessage: (text: string) => void
}

export const Dialogs = (props: DialogsType) => {

    let [error, setError] = useState<string | null>(null)
    let addPost = () => {
        if (props.dialogs.textAddMessage.trim()) {
            props.addPost()
        } else {
            setError("Необходимно ввести текст")
        }
    }
    const valueTextMessage = props.dialogs.textAddMessage
    const changeValueTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addTextMessage(e.currentTarget.value)
    }

    let dialogElement = props.dialogs.dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.dialogs.message.map(message => <MessageItem message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
                <div className={s.addPost}>
                    <textarea
                        className={error ? s.error : ""}
                        value={valueTextMessage}
                        onChange={changeValueTextMessage}
                    > </textarea>
                    <button onClick={addPost}>add post</button>
                    {error && <div className={s.errorMessage}>{error}</div>}
                </div>
            </div>
        </div>
    )
}