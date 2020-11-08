import React from "react";
import {UsersPegaType} from "../../redux/store";
import s from "./Users.module.scss"

type UsersPropsType = {
    users: UsersPegaType
    follow: (userID:string) => void
    unFollow: (userID:string) => void
}


export const Users = (props: UsersPropsType) => {
    return (
        <div >
            {props.users.users.map(u =>
            <div key={u.id} className={s.main}>
                <img src={u.avatar} alt=""/>
                <div>{u.name}</div>
                <div>{u.status}</div>
                { u.followed
                    ? <button onClick={() => {props.unFollow(u.id)}} >UnFollow</button>
                    : <button onClick={() => {props.follow(u.id)}} >Follow</button>}

            </div>
            )}
        </div>
    )
}