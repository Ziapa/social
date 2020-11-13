import {profileReducer} from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer";
import {DialogsPageType} from "./types";

let rerenderEntireTree = () => {
}

export type PostType = {
    name: string
    time: string
    like: number
    avatar: string
    message: string
}

// export type DialogsPageType = {
//     textAddMessage: string
//     dialog: Array<DialogsType>
//     message: Array<MessagesType>
// }

// export type DialogsType = {
//     id: number
//     name: string
// }
//
// type MessagesType = {
//     id: number
//     message: string
// }

export type ProfilePageType = {
    posts: Array<PostType>
    changeTextNewPost: string
    userCount: number
}

export type UsersPegaType = {
    users: Array<UsersType>
}

export type DataType = {
    error: null
    items: Array<UsersType>
    totalCount: number
}

export type UsersType = {
    id: string
    name: string
    status: string
    photos: PhotoType
    followed: boolean
}

export type PhotoType = {
    small: string
    large: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPegaType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = any

let store: StoreType = {
    _state: {
        usersPage: {
            users: []
        },
        profilePage: {
            changeTextNewPost: "",
            posts: [],
            userCount: 0
        },
        dialogsPage: {
            textAddMessage: "",
            dialog: [],
            message: []
        }
    },
    _subscribe(observer) {
        rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    }
}


export default store;

