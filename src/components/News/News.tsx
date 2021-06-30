import React from "react";
import {Redirect} from "react-router-dom";

type NewsProps = {
    isLogin: boolean
}

export const News = (props: NewsProps) => {

    if (!props.isLogin) return <Redirect to="/login"/>

    return (
        <div>News</div>
    )
}