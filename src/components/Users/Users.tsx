import React from "react";
import {UsersType} from "../../redux/store";
import axios from "axios"
import s from "./Users.module.scss"
import userPhoto from "../../assets/user.jpg"

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}




export class Users extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);

        axios.get<{ items: Array<UsersType> }>("https://social-network.samuraijs.com/api/1.0/users").then((res)  => {
            this.props.setUsers(res.data.items)
        })
    }



    render() {
        return (

            <div>

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