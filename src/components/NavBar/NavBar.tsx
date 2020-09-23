import React from "react";
import s from "./NavBar.module.scss";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href="">Profile</a></div>
            <div className={s.item}><a href="">Messages</a></div>
            <div className={s.item}><a href="">News</a></div>
            <div className={s.item}><a href="">Profile</a></div>
            <div className={`${s.item} ${s.settings}`}><a href="">Settings</a></div>

        </nav>
    )
}