import {authAPI} from "../DAL/API";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

export type AuthActionType =
    | setDataAuthType
    | loginACType



type loginACType = ReturnType<typeof setDataAuth>
type setDataAuthType = ReturnType<typeof loginAC>

type mapDispatchPropsType = {
    setUserAuthData: () => void
}

type mapStatePropsType = {
    isLogin: boolean
}

export type authReducerPropsType = mapDispatchPropsType & mapStatePropsType


export type InitialStateAuthType = {
    data: dataType
    isLogin: boolean
}

type dataType = {
    id: number | null
    email: string
    login: string
}


const initialState: InitialStateAuthType = {
    data: {
        id: null,
        email: "",
        login: ""
    },
    isLogin: false
}


export const authReducer = (state: InitialStateAuthType = initialState, action: AuthActionType): InitialStateAuthType => {
    switch (action.type) {

        case "SET_DATA_AUTH" :
            return {
                ...state,
                ...action.data,
                isLogin: true
            }
        case "LOGIN":
            debugger
            return {
                ...state,
                isLogin: action.login
            }
        default:
            return state
    }
}


export const setDataAuth = (data: dataType) => ({type: "SET_DATA_AUTH", data}) as const
export const loginAC = (login: boolean) => ({type: "LOGIN", login}) as const

export const setUserAuthData = () => (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionType>) => {
    authAPI.authMe()
        .then((res) => {
            debugger
            if (res.data.resultCode === 0)
                dispatch(setDataAuth(res.data.data))
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, any, AuthActionType>) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            debugger
            if (res.data.resultCode === 0) {
                dispatch(loginAC(true))
            }
        })
}

export const logOutTC = () => (dispatch: ThunkDispatch<AppStateType, any, AuthActionType>) => {
    authAPI.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(loginAC(false))
            }
        })
}