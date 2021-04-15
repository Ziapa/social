import React from "react";
import s from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";

export const ProfileInfo = (props: { profile: ProfileType }) => {

    let aboutMe = props.profile?.aboutMe

    return (
        <div className={s.ProfileInfo}>
            <div className={s.personaInfo}>
                {`Name:  ${props.profile.fullName}`}

            </div>
            <div>
                {`Looking for a job: ${props.profile.lookingForAJob}`}
            </div>
            <div>
                {aboutMe ?  `About me: ${props.profile?.aboutMe}` : ""}
            </div>
        </div>
    )
}


