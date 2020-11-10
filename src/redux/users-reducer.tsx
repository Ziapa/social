import { UsersType } from "./store"


export type ActionType = FollowACType | UnFollowACType | setUsersACType


type InitialStateType = {
    users: Array<UsersType>
}


let initialState = {
    users: []
}

export type FollowACType = {
    type: "FOLLOW"
    usersID: string
}

export type UnFollowACType = {
    type: "UNFOLLOW"
    usersID: string
}

export type setUsersACType = {
    type: "SET_USERS",
    users: Array<UsersType>
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {


    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }

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

export const setUsersAC = (users: Array<UsersType>): setUsersACType => {
    return {
        type: "SET_USERS",
        users: users
    }
}

