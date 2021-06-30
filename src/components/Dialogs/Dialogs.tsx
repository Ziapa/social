import React, {ChangeEvent, useState} from "react";
import s from "./Dialogs.module.scss";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./Message/MessageItem";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    isLogin: boolean
    dialog: Array<DialogsType>
    message: Array<MessagesType>
    textAddMessage: string
    addPost: () => void
    addTextMessage: (text: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let [error, setError] = useState<string | null>(null)
    let addPost = () => {
        if (props.textAddMessage.trim()) {
            props.addPost()
        } else {
            setError("Необходимно ввести текст")
        }
    }
    const valueTextMessage = props.textAddMessage
    const changeValueTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addTextMessage(e.currentTarget.value)
    }

    let dialogElement = props.dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.message.map(message => <MessageItem message={message.message}/>)
    debugger

    if (!props.isLogin) return <Redirect to="/login"/>

    return (<div>



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
        </div>
    )
}