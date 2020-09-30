import React from "react";
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

type DialogDataType = {
    name: string
    id: number
}

type MessageDataType = {
    message: string
    id: number
}

type MessageType = {
    message: string
    id: number
}

type DialogType = {
    name: string
    id: number
}

type DialogsType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
    DialogDataType: Array<DialogDataType>
    MessageDataType: Array<MessageDataType>
}


const Dialog = (props: DialogType) => {

    let path = `/dialogs/${props.id}`
    let name = props.name

    return (<div>
            <NavLink activeClassName={s.active} to={path}>
                {name}
            </NavLink>
        </div>
    )
}


const Message = (props: MessageType) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}

let dialogs = [
    {name: "Den", id: 1},
    {name: "SmiT", id: 2},
    {name: "Braun", id: 3}
]

let messages = [
    {message: "Hi", id: 1},
    {message: "How are you?", id: 2},
    {message: "Yo", id: 3}
]

export const Dialogs = (props: DialogsType) => {

    let dialogElement = dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messageElement = messages.map( message => <Message message={message.message} id={message.id}/>)

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