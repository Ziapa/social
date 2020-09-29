import React from "react";
import s from "./ProfileInfo.module.scss";


type ProfileInfo = {

}

export const ProfileInfo = (props:ProfileInfo) => {
    return (
        <div className={s.ProfileInfo}>
            <div>
                ava
            </div>
            <div>
                description
            </div>
        </div>
    )
}


