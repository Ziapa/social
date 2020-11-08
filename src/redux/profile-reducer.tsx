import {PostType} from "./types"

export type ActionType = TextAddPostACType | AddPostACType


type InitialStateType = {
    changeTextNewPost: string
    posts: Array<PostType>
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
    ] as Array<PostType>
}

export type TextAddPostACType = {
    type: "TEXT-ADD-POST"
    newText: string
}

export const textAddPostAC = (newText: string): TextAddPostACType => {
    return {
        type: "TEXT-ADD-POST",
        newText: newText
    } as const
}
export type AddPostACType = {
    type: "ADD-POST"
}

export const addPostAC = (): AddPostACType => ({type: "ADD-POST"} as const)


export const profileReducer = (state: InitialStateType = initialState, action: ActionType) => {
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
        default:
            return state
    }
}