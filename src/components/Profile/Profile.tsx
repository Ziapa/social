import React from "react";
import s from "./Profile.module.scss";
import {MyPosts} from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";


export const Profile = () => {
    return (
        <div className={s.Profile}>
            <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                 alt=""/>
            <Description />
           <MyPosts />
        </div>
    )
}

