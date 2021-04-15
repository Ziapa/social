import React from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";

export const Profile = (props: { profile: ProfileType }) => {

    let photos = props.profile.photos?.large

    return (
        <div className={s.Profile}>

            <img
                src={photos ? photos : "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"}
                className={photos ? "" : s.withoutPhoto}
                alt=""/>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

