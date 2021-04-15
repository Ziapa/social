import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7zCD-dHiaNWCvKp-sGnzT7cA7MJb7jo0QOw&usqp=CAU"
            alt=""/>
            <NavLink to={"/login"} activeClassName={s.active} className={s.login}>Login</NavLink>
        </header>
    )
}