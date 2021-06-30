import {PostType} from "./types"
import {profileAPI} from "../DAL/API";

export type ActionType = TextAddPostACType | AddPostACType | SetProfileType

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
}
type mapDispatchPropsType = {

    getUserProfile: (userID: string) => void
}

export type reducerPropsType = mapStatePropsType & mapDispatchPropsType

export type InitialStateType = {
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
        small: string| null
        large: string| null
    }
}


let initialState = {
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
export type TextAddPostACType = {
    type: "TEXT-ADD-POST"
    newText: string
}



export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
        default:
            return state
    }
}

export const updateNewPostText = (newText: string): TextAddPostACType => {
    return {
        type: "TEXT-ADD-POST",
        newText: newText
    }
}

export const addPost = (): AddPostACType => ({type: "ADD-POST"})

export const setProfile = (profile: ProfileType): SetProfileType => ({type: "SET_PROFILE", profile})


export const getUserProfile  = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getUserData(userId)
            .then((res) => {
                dispatch(setProfile(res.data))
            })
    }
}