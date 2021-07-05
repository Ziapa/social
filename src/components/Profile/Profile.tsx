import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {profileAPI} from "../../DAL/API";

type ProfilePropsType = {
    profile: ProfileType
    textStatus: string
    updateTextStatus: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    let photos = props.profile.photos?.large

    const [toggle, setToggle] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateTextStatus(e.currentTarget.value)
    }

    useEffect(() => {
        profileAPI.getStatusProfile(props.profile.userId)
            .then((res) => {

            })
    },[props.profile.userId])

    return (
        <div className={s.Profile}>
            <div> {`Status: `}

                {toggle ?
                    <input type="text" value={props.textStatus} autoFocus onBlur={() => setToggle(false)}
                           onChange={onChangeHandler}/>
                    :
                    <span onDoubleClick={() => setToggle(true)}>
                    {props.textStatus}
                </span>
                }

            </div>
            <img
                src={photos ? photos : "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"}
                className={s.sss + "" + photos ? "" : s.withoutPhoto}
                alt=""/>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

