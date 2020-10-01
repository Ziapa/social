import React from "react";
import s from "./../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

type DialogType = {
    name:string
    id:number
}

export const DialogItem = (props: DialogType) => {

    let path = `/dialogs/${props.id}`
    let name = props.name

    return (<div>
            <NavLink activeClassName={s.active} to={path}>
                {name}
            </NavLink>
        </div>
    )
}

