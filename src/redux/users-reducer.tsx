import {v1} from "uuid";

export type ActionType = FollowACType | UnFollowACType


type InitialStateType = {
    users: Array<UsersType>
}

type UsersType = {
    name: string
    status: string
    avatar: string
    id: string
    followed: boolean
}

let initialState = {
    users: [
        {name: "Dmitry", status: "ready", avatar: "https://w7.pngwing.com/pngs/117/752/png-transparent-computer-icons-user-icon-design-numerous-miscellaneous-logo-computer-wallpaper.png", id: v1(), followed: false},
        {name: "Alex", status: "ready", avatar: "https://w7.pngwing.com/pngs/117/752/png-transparent-computer-icons-user-icon-design-numerous-miscellaneous-logo-computer-wallpaper.png", id: v1(), followed: true},
        {name: "Sveta", status: "ready", avatar: "https://w7.pngwing.com/pngs/117/752/png-transparent-computer-icons-user-icon-design-numerous-miscellaneous-logo-computer-wallpaper.png", id: v1(), followed: false},
        {name: "Ignat", status: "ready", avatar: "https://w7.pngwing.com/pngs/117/752/png-transparent-computer-icons-user-icon-design-numerous-miscellaneous-logo-computer-wallpaper.png", id: v1(), followed: true}
    ]
}

export type FollowACType = {
    type: "FOLLOW"
    usersID: string
}

export type UnFollowACType = {
    type: "UNFOLLOW"
    usersID: string
}


export const FollowAC = (usersID: string): FollowACType => {
    return {
        type: "FOLLOW",
        usersID: usersID
    }
}

export const UnFollowAC = (usersID: string): UnFollowACType => {
    return {
        type: "UNFOLLOW",
        usersID: usersID
    }
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {


    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        default:
            return state
    }
}

