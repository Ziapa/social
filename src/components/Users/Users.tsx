import React from "react";
import s from "./Users.module.scss"
import userPhoto from "../../assets/user.jpg"
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type axiosFollowType = {
    resultCode: number
    messages: []
}

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
    follow: (userID: number) => void
    unFollow: (userID: number) => void
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
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() => {

                            props.disable(true, u.id)
                            axios.delete<axiosFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "1bdd3861-bd56-449e-97ed-eaae9759b5f0"
                                    }
                                })
                                .then((res) => {
                                    if (res.data.resultCode === 0) {
                                        props.disable(false, u.id)
                                        props.unFollow(u.id)
                                    }
                                })
                        }}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                            props.disable(true, u.id)

                            axios.post<axiosFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}
                                , {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "1bdd3861-bd56-449e-97ed-eaae9759b5f0"
                                    }
                                })
                                .then((res) => {
                                    if (res.data.resultCode === 0) {
                                        props.disable(false, u.id)
                                        props.follow(u.id)
                                    }
                                        })
                        }}>Follow</button>}

                </div>
            )}
        </div>
    )
}
