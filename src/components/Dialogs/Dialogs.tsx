import React from "react";
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: number
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

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.messageItem}>
            {props.message}
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
                <Message message={"HI"}/>
                <Message message={"How are you?"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    )
}