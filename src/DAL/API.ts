import axios from "axios";
import {UsersType} from "../redux/users-reducer";

type AxiosGetUsersType = {
    error: string
    items: Array<UsersType>
    totalCount: number
}

export type axiosFollowType = {
    resultCode: number
    messages: []
}

export type axiosLoginType= {
    data: {userId: number}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

export type axiosGetStatus = {
    Media: string
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1bdd3861-bd56-449e-97ed-eaae9759b5f0"
    }
})

export const usersAPI = {

    getUsers(pageActive: number, userPageCount: number) {
        return instance.get<AxiosGetUsersType>(`users?page=${pageActive}&count=${userPageCount}`)
    },
    onPageChanged(pageNumber: number, userPageCount: number) {
        return instance.get(`users?page=${pageNumber}&count=${userPageCount}`)
    },
    follow(userID: number) {
        debugger
        return instance.post<axiosFollowType>(`follow/${userID}`)
    },
    unFollow(userID: number) {
        return instance.delete(`follow/${userID}`)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
    login(email: string, password:string, rememberMe: boolean) {
        return instance.post<axiosLoginType>(`auth/login`,
            {
                email, password, rememberMe
            })
    }

}

export const profileAPI = {
    getUserData(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatusProfile(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(textStatus: string) {
        return instance.put(`/profile/status/`,
            {

                status: textStatus

            }
        )
    }
}



