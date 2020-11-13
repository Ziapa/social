export type ActionType =
   | ReturnType<typeof FollowAC>
   | ReturnType<typeof UnFollowAC>
   | ReturnType<typeof setUsersAC>
   | ReturnType<typeof setUserCountAC>

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

let initialState = {
    users: [] as Array<UsersType>,
    userCount: 0
}

export type InitialStateUsersType = typeof initialState




export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET_USER_COUNT" :
            debugger
            return {
                ...state,
                userCount: action.usersCount
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


export const FollowAC = (usersID: string) => ({type: "FOLLOW", usersID: usersID} ) as const

export const UnFollowAC = (usersID: string)  => ({type: "UNFOLLOW", usersID: usersID}) as const

export const setUsersAC = (users: Array<UsersType>) => ({type: "SET_USERS", users: users}) as const

export const setUserCountAC = (usersCount: number) => ({type: "SET_USER_COUNT", usersCount}) as const

