import React from "react";
import s from "./Profile.module.scss";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type DialogsPropsType = {
    profilePage: ProfilePageType
}


export const Profile = (props: DialogsPropsType) => {
    return (
        <div className={s.Profile}>
            <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                 alt=""/>
            <ProfileInfo />
           <MyPosts posts={props.profilePage.posts}/>
        </div>
    )
}

