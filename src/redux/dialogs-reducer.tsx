import {DialogsType, MessagesType} from "./types";

export type ActionType = AddMessageACType | TextAddMessageACType


type InitialStateType = {
    textAddMessage: string,
    dialog: Array<DialogsType>
    message: Array<MessagesType>
}


let initialState = {
    textAddMessage: "",
    dialog: [
        {name: "Den", id: 1},
        {name: "SmiT", id: 2},
        {name: "Braun", id: 3}
    ] as Array<DialogsType>,

    message: [
        {message: "Hi", id: 1},
        {message: "How are you?", id: 2},
        {message: "Yo", id: 3}
    ] as Array<MessagesType>
}

export type AddMessageACType = {
    type: "ADD_MESSAGE"
}


export const AddMessageAC = (): AddMessageACType => ({type: "ADD_MESSAGE"})

export type TextAddMessageACType = {
    type: "TEXT-ADD-MESSAGE"
    newText: string
}

export const TextAddMessageAC = (newText: string): TextAddMessageACType => {
    return {
        type: "TEXT-ADD-MESSAGE",
        newText: newText
    }
}


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    let newState = {
        ...state,
        message: [...state.message]
    }

    switch (action.type) {
        case "ADD_MESSAGE":
            let newMessage = {
                message: state.textAddMessage
                , id: 4
            }
            newState.message.push(newMessage)
            newState.textAddMessage = ""
            return newState

        case "TEXT-ADD-MESSAGE":
            newState.textAddMessage = action.newText
            return newState

        default:
            return state
    }
}

