import React from "react";
import s from "./Users.module.scss"
import UsersPhoto from "../../assets/user.jpg"
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    followingInProgress: Array<number>
    pageActive: number
    disable: (isFetching: boolean, id: number) => void
    setPageActive: (page: number) => void
    userPageCount: number
    userCount: number
    setUsersCount: (userCounter: number) => void
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
    following: (userID: number) => void
    unFollowing: (userID: number) => void
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
            {page.map((p, i) =>

                <span key={i} onClick={() => props.onPageChanged(p)}
                      className={p === props.pageActive ? s.active : ""}>{p}</span>)}


            {props.users.map((u) =>
                <div key={u.id} className={s.main}>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small ? u.photos.small : UsersPhoto} alt=""/>
                    </NavLink>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unFollowing(u.id)
                                  }}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.following(u.id)
                                  }}>Follow</button>}

                </div>
            )}
        </div>
    )
}
