import {DialogsPageType} from "./state";

export type ActionType =
    ReturnType<typeof AddMessageAC>
    | ReturnType<typeof TextAddMessageAC>



export const AddMessageAC = () => ({type: "ADD_MESSAGE"} as const)

export const TextAddMessageAC = (newText: string) => {
    return {
        type: "TEXT-ADD-MESSAGE",
        newText: newText
    } as const
}

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            let newMessage = {
                message: state.textAddMessage
                , id: 4
            }
            state.message.push(newMessage)
            state.textAddMessage = ""
            break;

        case "TEXT-ADD-MESSAGE":
            state.textAddMessage = action.newText
            break;
        default:
            return state
    }

    return state
}

