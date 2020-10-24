import { profileReducer } from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer";

let rerenderEntireTree = () => {
}

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

type MessagesType = {
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

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof textAddPostAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof TextAddMessageAC>


export const AddMessageAC = () => ({type: "ADD_MESSAGE"} as const)

export const TextAddMessageAC = (newText: string) => {
    return {
        type: "TEXT-ADD-MESSAGE",
        newText: newText
    } as const
}
export const textAddPostAC = (newText: string) => {
    return {
        type: "TEXT-ADD-POST",
        newText: newText
    } as const
}
export const addPostAC = () =>  ({type: "ADD-POST"} as const)



let store: StoreType = {
    _state: {
        profilePage: {
            changeTextNewPost: "",
            posts: [
                {
                    name: "Dart",
                    time: "10:23",
                    avatar: "https://html5css.ru/w3css/img_avatar3.png",
                    message: "bye",
                    like: 25
                },
            ]
        },
        dialogsPage: {
            textAddMessage: "",
            dialog: [
                {name: "Den", id: 1},
                {name: "SmiT", id: 2},
                {name: "Braun", id: 3}
            ],

            message: [
                {message: "Hi", id: 1},
                {message: "How are you?", id: 2},
                {message: "Yo", id: 3}
            ]
        }
    },
    _subscribe(observer) {
        rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        // ProfilePage
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        rerenderEntireTree()
    },
    // addPost() {
    //     let newPost: PostType = {
    //         name: "Dart",
    //         message: this._state.profilePage.changeTextNewPost,
    //         time: "11:00",
    //         avatar: "https://html5css.ru/w3css/img_avatar3.png",
    //         like: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.changeTextNewPost = ""
    //     rerenderEntireTree()
    // },
    // addMessage() {
    //     let newMessage = {
    //         message: this._state.dialogsPage.textAddMessage
    //         , id: 4
    //     }
    //     this._state.dialogsPage.message.push(newMessage)
    //     this._state.dialogsPage.textAddMessage = ""
    //     rerenderEntireTree()
    // },
    // textAddPost(newText) {
    //     this._state.profilePage.changeTextNewPost = newText
    //     rerenderEntireTree()
    // },
    // textAddMessage(newText) {
    //     this._state.dialogsPage.textAddMessage = newText
    //     rerenderEntireTree()
    //
    // },
}


export default store;

