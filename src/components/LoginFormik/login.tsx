import React from "react";
import {LoginForm} from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logOutTC} from "../../redux/auth-reducer";


export const Login = () => {

    const dispatch = useDispatch()

    const isLogin = useSelector<AppStateType, boolean>(state => state.auth.isLogin)
    const logOut = () => {
        dispatch(logOutTC())
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                {isLogin || <LoginForm/>}
                {!isLogin || <button onClick={logOut} >Log out</button>}
            </div>
        </>
    )
}


