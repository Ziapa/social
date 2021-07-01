import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/profile-reducer";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

export function withAuthRedirect<T>   (Component: ComponentType<T>)  {
    const RedirectComponent = (props: MapStateType) => {
        let {isLogin, ...resProps} = props
        if (!props.isLogin) return <Redirect to="/login"/>
debugger
        return <Component {...resProps as T} />
    }

    type MapStateType = {
        isLogin: boolean
    }

    const mapSateToProps = (state: AppStateType): MapStateType => {
        return {
            isLogin: state.auth.isLogin
        }
    }

    return connect(mapSateToProps, {getUserProfile})(RedirectComponent)
}