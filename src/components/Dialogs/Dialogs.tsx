import React from "react";
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

type dialogDataType = {
    name: string
    id: number
}

type messageDataType = {
    message: string
    id: number
}

type MessageType = {
    message: string
    id: number
}

type dialogType = {
    name: string
    id: number
}

type DialogsType = {
    dialog: Array<dialogType>
    message: Array<MessageType>
    dialogDataType: Array<dialogDataType>
    messageDataType: Array<messageDataType>
}


const Dialog = (props: dialogType) => {

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

let dialogData = [
    {name: "Den", id: 1},
    {name: "SmiT", id: 2},
    {name: "Braun", id: 3}
]

let messageData = [
    {message: "Hi", id: 1},
    {message: "How are you?", id: 2},
    {message: "Yo", id: 3}
]

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
                <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
                <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
            </div>
            <div className={s.message}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
            </div>
        </div>
    )
}