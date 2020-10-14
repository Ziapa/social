import {rerenderEntireTree} from "../render";

export type PostType = {
    name: string
    time: string
    avatar: string
    message: string
    like: number
}

export type DialogsPageType = {
    textAddMessage: string
    dialog: Array<DialogsType>
    message: Array<MessagesType>
}

type DialogsType = {
    name: string
    id: number
}

type MessagesType = {
    message: string
    id: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    changeTextNewPost: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let state: RootStateType = {
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
}


export let addPost = () => {
    let newPost: PostType = {
        name: "Dart",
        message: state.profilePage.changeTextNewPost,
        time: "11:00",
        avatar: "https://html5css.ru/w3css/img_avatar3.png",
        like: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.changeTextNewPost = ""
    rerenderEntireTree(state)
}

export const textAddPost = (newText: string) => {
    state.profilePage.changeTextNewPost = newText
    rerenderEntireTree(state)
}


export const addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.textAddMessage
        , id: 4
    }
    state.dialogsPage.message.push(newMessage)
    state.dialogsPage.textAddMessage = ""
    rerenderEntireTree(state)
}

export const textAddMessage = (newText: string) => {
    state.dialogsPage.textAddMessage = newText
    rerenderEntireTree(state)

}


export default state;

