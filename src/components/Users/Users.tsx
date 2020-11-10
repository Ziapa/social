import React from "react";
import {UsersType} from "../../redux/store";
import axios from "axios"

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}



export const Users = (props: UsersPropsType) => {
    debugger
    if (!props.users.length) {
        axios.get<{ items: Array<UsersType> }>("https://social-network.samuraijs.com/api/1.0/users").then((res)  => {
            props.setUsers(res.data.items)
        })
    }
    debugger
// const clickHandlerUnFollow = () => {props.unFollow}

    return (
        <div>
            {props.users.map(u => u.name)}
            {/*{props.users.map(u =>*/}
            {/*    <div key={u.id} className={s.main}>*/}
            {/*        <img src={u.photos.small} alt=""/>*/}
            {/*        <div>{u.name}</div>*/}
            {/*        <div>{u.status}</div>*/}
            {/*        {u.followed*/}
            {/*            ? <button onClick={() => {*/}
            {/*                props.unFollow(u.id)*/}
            {/*            }}>UnFollow</button>*/}
            {/*            : <button onClick={() => {*/}
            {/*                props.follow(u.id)*/}
            {/*            }}>Follow</button>}*/}

            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}