import {ActionType} from "./store";

export type PostType = {
    name: string
    time: string
    like: number
    avatar: string
    message: string
}

export type DialogsPageType = {
    textAddMessage: string
    dialog: Array<DialogsType>
    message: Array<MessagesType>
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    changeTextNewPost: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}