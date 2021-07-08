import {PostType} from "./types"
import {profileAPI} from "../DAL/API";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

export type ProfileActionType = TextAddPostACType | AddPostACType | SetProfileType | SetStatusACType


export type AddPostACType = {
    type: "ADD-POST"
}

export type SetProfileType = {
    type: "SET_PROFILE",
    profile: ProfileType
}

type mapStatePropsType = {
    profile: ProfileType
    isLogin: boolean
    textStatus: string
}
export type TextAddPostACType = {
    type: "TEXT-ADD-POST"
    newText: string
}

export type SetStatusACType = {
    type: "SET-PROFILE-STATUS"
    text: string
}

type mapDispatchPropsType = {
    getUserStatus: (userId: string) => void
    getUserProfile: (userID: string) => void
    updateStatus: (text: string) => void
}

export type reducerPropsType = mapStatePropsType & mapDispatchPropsType

export type InitialStateType = {
    textStatus: string
    changeTextNewPost: string
    posts: Array<PostType>
    profile: ProfileType
    isFetching: boolean
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
}


let initialState = {
    textStatus: "Test",
    changeTextNewPost: "",
    posts: [
        {
            name: "Dart",
            time: "10:23",
            avatar: "https://html5css.ru/w3css/img_avatar3.png",
            message: "bye",
            like: 25
        }
    ],
    profile: {} as ProfileType,
    isFetching: false
}


export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    name: "Dart",
                    message: state.changeTextNewPost,
                    time: "11:00",
                    avatar: "https://html5css.ru/w3css/img_avatar3.png",
                    like: 0
                }],
                changeTextNewPost: ""
            }
        case "TEXT-ADD-POST":
            return {
                ...state,
                changeTextNewPost: action.newText
            }
        case "SET_PROFILE":
            return {

                ...state,
                profile: action.profile
            }
        case "SET-PROFILE-STATUS":
            return {
                ...state,
                textStatus: action.text
            }
        default:
            return state
    }
}

export const updateNewPostText = (newText: string): TextAddPostACType => ({type: "TEXT-ADD-POST", newText: newText})


export const addPost = (): AddPostACType => ({type: "ADD-POST"})

export const setProfile = (profile: ProfileType): SetProfileType => ({type: "SET_PROFILE", profile})
export const setProfileStatus = (text: string): SetStatusACType => ({type: "SET-PROFILE-STATUS", text})


export const getUserProfile = (userId: string) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionType>) => {
        profileAPI.getUserData(userId)
            .then((res) => {
                dispatch(setProfile(res.data))
            })
    }
}

export const getUserStatus = (userId: number) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionType>) => {
        profileAPI.getStatusProfile(userId)
            .then((res) => {
                debugger
                dispatch(setProfileStatus(res.data))
            })
    }
}

export const updateStatus = (text: string) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionType>) => {
        profileAPI.updateStatus(text)
            .then((res) => {
                dispatch(setProfileStatus(text))
            })
    }
}