export type PostType = {
    name: string
    time: string
    avatar: string
    message: string
    like: number
}

export type DialogsPageType = {
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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {name: "Shana", time: "10:00", avatar: "https://www.blexar.com/avatar.png", message: "privet", like: 12},
            {
                name: "Dart",
                time: "10:23",
                avatar: "https://html5css.ru/w3css/img_avatar3.png",
                message: "bye",
                like: 25
            },
            {name: "Dart", time: "10:23", avatar: "https://html5css.ru/w3css/img_avatar3.png", message: "bye", like: 25}
        ]
    },
    dialogsPage: {
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

export default state;

