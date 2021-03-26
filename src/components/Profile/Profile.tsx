import React from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";



type ProfilePropsType = {
    profile: ProfileType
}



export const Profile = (props: ProfilePropsType) => {


    let photos = props.profile.photos?.large

    return (
        <div className={s.Profile}>

            <img src={photos ? photos : "dfgdfhdfhg"}
                 alt=""/>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

