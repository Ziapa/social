import React, {ChangeEvent, useState} from "react";
import s from "./Dialogs.module.scss";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./Message/MessageItem";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    dialogs: DialogsPageType
    textAddMessage: (newText: string) => void
    addMessage: () => void
}

export const Dialogs = (props: DialogsType) => {


    let [error, setError] = useState<string | null>(null)
    let dialogElement = props.dialogs.dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.dialogs.message.map(message => <MessageItem message={message.message}/>)
    let textAddPost = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (props.dialogs.textAddMessage.trim()) {
            props.addMessage()
        } else {
            setError("Необходимно ввести текст")
        }
    }


    const addTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.textAddMessage(e.currentTarget.value)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
                <div className={s.addPost}>
                    <textarea className={error ? s.error : ""}
                              value={props.dialogs.textAddMessage}
                              onChange={addTextMessage}
                              ref={textAddPost}> </textarea>
                    <button onClick={addPost}>add post</button>
                    {error && <div className={s.errorMessage}>{error}</div>}
                </div>
            </div>
        </div>
    )
}