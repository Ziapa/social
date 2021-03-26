import {v1} from "uuid";

export type ActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof addTextMessage>


// export type InitialStateDialogsType = {
//     textAddMessage: string,
//     dialog: Array<DialogsType>
//     message: Array<MessagesType>
// }
export type InitialStateDialogsType = typeof initialState

let initialState = {
    textAddMessage: "",
    dialog: [
        {name: "Den", id: v1()},
        {name: "SmiT", id: v1()},
        {name: "Braun", id: v1()}
    ] as Array<DialogsType>,

    message: [
        {message: "Hi", id: v1()},
        {message: "How are you?", id: v1()},
        {message: "Yo", id: v1()}
    ] as Array<MessagesType>
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}


export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionType): InitialStateDialogsType => {


    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                message: [...state.message, {
                    message: state.textAddMessage
                    , id: v1()
                }],
                textAddMessage: ""
            }

        case "TEXT-ADD-MESSAGE":
            return {
                ...state,
                textAddMessage: action.newText
            }

        default:
            return state
    }
}

export const addPost = () => ({type: "ADD_MESSAGE"}) as const


export const addTextMessage = (newText: string) => {
    return {
        type: "TEXT-ADD-MESSAGE",
        newText: newText
    } as const
}