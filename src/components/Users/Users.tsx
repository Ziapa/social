import React from "react";
import {UsersType} from "../../redux/store";
import axios from "axios"
import s from "./Users.module.scss"
import userPhoto from "../../assets/user.jpg"

type UsersPropsType = {
    pageActive: number
    setPageActive: (page: number) => void
    userPageCount: number
    userCount: number
    setUsersCounter: (userCounter: number) => void
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
    follow: (userID: string) => void
    unFollow: (userID: string) => void
}

type AxiosType = {
    items: Array<UsersType>
    totalCount: number
    error: string
}


export class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get<AxiosType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.userPageCount}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setUsersCounter(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPageActive(pageNumber)
        axios.get<AxiosType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.userPageCount}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setUsersCounter(res.data.totalCount)
            })


    }


    render() {
        let pageCounter = Math.ceil(+this.props.userCount / +this.props.userPageCount)
        let page = []
        for (let i = 1; i <= pageCounter; i++) {
            page.push(i)
        }
        return (

            <div>
                {page.map(p =>

                    <span onClick={() => this.onPageChanged(p)}
                                     className={p === this.props.pageActive ? s.active : ""}>{p}</span>)}


                {this.props.users.map(u =>
                    <div key={u.id} className={s.main}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                )}
            </div>
        )
    }
}