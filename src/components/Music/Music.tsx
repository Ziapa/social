import React from "react";
import {Redirect} from "react-router-dom";

type MusicProps = {
    isLogin: boolean
}

export const Music = (props: MusicProps) => {

    if (!props.isLogin) return <Redirect to="/login"/>

    return (
        <div>Music</div>
    )
}