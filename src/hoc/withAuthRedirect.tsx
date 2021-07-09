import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/profile-reducer";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";


type MapStateType = {
    isLogin: boolean
}

export function withAuthRedirect<T>   (Component: ComponentType<T>)  {
    debugger
    const RedirectComponent = (props: MapStateType) => {
        let {isLogin, ...resProps} = props
        if (!props.isLogin) return <Redirect to="/login"/>
        return <Component {...resProps as T} />
    }


    const mapSateToProps = (state: AppStateType): MapStateType => {
        return {
            isLogin: state.auth.isLogin
        }
    }

    return connect(mapSateToProps, {getUserProfile})(RedirectComponent)
}