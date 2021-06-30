import {usersAPI} from "../DAL/API";

export type ActionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setUserCount>
    | ReturnType<typeof setPageActive>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof disable>

export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotoType
    followed: boolean
    uniqueUrlName: string
}


export type PhotoType = {
    small: string
    large: string
}

let initialState = {
    users: [] as Array<UsersType>,
    userCount: 0,
    userPageCount: 100,
    pageActive: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export type InitialStateUsersType = typeof initialState


export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case "SET_FETCHING_TRUE":
            return {
                ...state,
                isFetching: action.isFetching
            }

        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET_USER_COUNT" :
            return {
                ...state,
                userCount: action.usersCount
            }
        case "SET_PAGE" :
            return {
                ...state,
                pageActive: action.page
            }

        case "FOLLOW":
            debugger
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
            debugger
            return {

                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case "DISABLE":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.usersID]
                    : state.followingInProgress.filter(id => id !== action.usersID)

            }
        default:
            return state
    }
}


export const follow = (usersID: number) => ({type: "FOLLOW", usersID}) as const
export const unFollow = (usersID: number) => ({type: "UNFOLLOW", usersID}) as const

export const setUsers = (users: Array<UsersType>) => ({type: "SET_USERS", users}) as const
export const setFetching = (isFetching: boolean) => ({type: "SET_FETCHING_TRUE", isFetching}) as const
export const setPageActive = (page: number) => ({type: "SET_PAGE", page}) as const
export const setUserCount = (usersCount: number) => ({type: "SET_USER_COUNT", usersCount}) as const

export const disable = (isFetching: boolean, usersID: number) => ({type: "DISABLE", isFetching, usersID}) as const

export const getUsers = (pageActive: number, userPageCount: number) => {
    return (dispatch: any) => {
        usersAPI.getUsers(pageActive, userPageCount)
            .then((res) => {
                dispatch(setFetching(true))
                dispatch(setUsers(res.data.items))
                dispatch(setUserCount(res.data.totalCount))
                dispatch(setPageActive(pageActive))
            })
    }
}

export const following = (userID: number) => {
    return (dispatch: any) => {
        dispatch(disable(true, userID))
        usersAPI.follow(userID)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(disable(false, userID))
                    dispatch(follow(userID))
                }
            })
    }
}

export const unFollowing = (userID: number) => {
    return (dispatch: any) => {
        dispatch(disable(true, userID))

        usersAPI.unFollow(userID)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(disable(false, userID))
                    dispatch(unFollow(userID))
                }
            })
    }
}


