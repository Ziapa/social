import {PostType, ProfilePageType, ActionType} from "./state";


export const textAddPostAC = (newText: string) => {
    return {
        type: "TEXT-ADD-POST",
        newText: newText
    } as const
}
export const addPostAC = () => ({type: "ADD-POST"} as const)


export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                name: "Dart",
                message: state.changeTextNewPost,
                time: "11:00",
                avatar: "https://html5css.ru/w3css/img_avatar3.png",
                like: 0
            }
            state.posts.push(newPost)
            state.changeTextNewPost = ""
            break;
        case "TEXT-ADD-POST":
            state.changeTextNewPost = action.newText
            break;

    }

    return state
}