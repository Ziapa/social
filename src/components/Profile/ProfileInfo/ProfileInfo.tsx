import React from "react";
import s from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";


type ProfileInfo = {
    profile: ProfileType
}



export const ProfileInfo = (props:ProfileInfo) => {

    let aboutMe = props.profile?.aboutMe

    return (
        <div className={s.ProfileInfo}>
            <div>
                {`Name:  ${props.profile.fullName}`}
            </div>
            <div>
                {aboutMe ?  `About me: ${props.profile?.aboutMe}` : ""}
            </div>
        </div>
    )
}


