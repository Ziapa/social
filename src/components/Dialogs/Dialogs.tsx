import React from "react";
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

type DialogType = {
    name:string
    id: number
}

const Dialog = (props: DialogType) => {
    return (<div>
        <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>
            {props.name}
        </NavLink>
        </div>
    )
}

type MessageType = {
    text:string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.messageItem}>
            {props.text}
        </div>
    )
}



export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name={"Den"} id={1}/>
                <Dialog name={"SmiT"} id={2}/>
                <Dialog name={"Braun"} id={3}/>
            </div>
            <div className={s.message}>
            <Message text={"HI"}/>
            <Message text={"How are you?"}/>
            <Message text={"Yo"}/>
            </div>
        </div>
    )
}