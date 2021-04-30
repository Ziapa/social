import  axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1bdd3861-bd56-449e-97ed-eaae9759b5f0"
    }
})

export const usersAPI = {

    getUsers(pageActive: number, userPageCount: number) {
        return instance.get(`users?page=${pageActive}&count=${userPageCount}`)
    },
    onPageChanged(pageNumber: number, userPageCount:number) {
        return instance.get(`users?page=${pageNumber}&count=${userPageCount}`)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getUserData(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}
