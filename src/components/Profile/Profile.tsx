import React from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

type DialogsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action:ActionType) => void

}


export const Profile = (props: DialogsPropsType) => {
    return (
        <div className={s.Profile}>
            <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                 alt=""/>
            <ProfileInfo/>
            <MyPostsContainer
                message={props.profilePage.changeTextNewPost}
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
            />
        </div>
    )
}

