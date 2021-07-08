import React, {ChangeEvent, useState} from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
    textStatus: string
    updateStatus: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

const [textStatus, setTextStatus] = useState(props.textStatus)

    let photos = props.profile.photos?.large

    const [toggle, setToggle] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTextStatus(e.currentTarget.value)
    }
    const onChangeStatusHandler = () => {
        setToggle(false)
        props.updateStatus(textStatus)
    }

    return (
        <div className={s.Profile}>
            <div> {`Status: `}

                {toggle ?
                    <input type="text" value={textStatus} autoFocus onBlur={onChangeStatusHandler}
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

