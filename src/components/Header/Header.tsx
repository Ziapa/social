import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export const Header = (props: { isLogin: boolean}) => {

    const name = useSelector<AppStateType, string>(state => state.profilePage.profile.fullName)

    return (
        <header className={s.header}><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7zCD-dHiaNWCvKp-sGnzT7cA7MJb7jo0QOw&usqp=CAU"
            alt=""/>
            {props.isLogin
                ? <div className={s.loginName} >
                    <NavLink to={"/login"} activeClassName={s.active} className={s.login}>{name}</NavLink>
            </div>
                : <NavLink to={"/login"} activeClassName={s.active} className={s.login}>Login</NavLink>
                }
        </header>
    )
}