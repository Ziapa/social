import React from "react";
import s from "./Users.module.scss"
import userPhoto from "../../assets/user.jpg"
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    pageActive: number
    setPageActive: (page: number) => void
    userPageCount: number
    userCount: number
    setUsersCount: (userCounter: number) => void
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pageCounter = Math.ceil(+props.userCount / +props.userPageCount)
    let page = []
    for (let i = 1; i <= pageCounter; i++) {
        page.push(i)
    }
    return (

        <div>
            {page.map(p =>

                <span onClick={() => props.onPageChanged(p)}
                      className={p === props.pageActive ? s.active : ""}>{p}</span>)}


            {props.users.map(u =>
                <div key={u.id} className={s.main}>
                    <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            )}
        </div>
    )
}
