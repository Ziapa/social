import React from "react";
import {UsersType} from "../../redux/store";
import axios from "axios"
import s from "./Users.module.scss"
import userPhoto from "../../assets/user.jpg"

type UsersPropsType = {
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
        axios.get<AxiosType>("https://social-network.samuraijs.com/api/1.0/users?count=2").then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setUsersCounter(res.data.totalCount)
            debugger
        })
    }



    render() {debugger
        return (

            <div>
<div>{this.props.userCount}</div>
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