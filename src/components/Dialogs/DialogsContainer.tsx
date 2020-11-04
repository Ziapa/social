import React, {ChangeEvent, useState} from "react";
import {ActionType, DialogsPageType} from "../../redux/store";
import {AddMessageAC, TextAddMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    dialogs: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const DialogsContainer = (props: DialogsType) => {


    let [error, setError] = useState<string | null>(null)
    let addPost = () => {
        if (props.dialogs.textAddMessage.trim()) {
            props.dispatch(AddMessageAC())
        } else {
            setError("Необходимно ввести текст")
        }
    }


    const addTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(TextAddMessageAC(text))
    }

    return (
        <Dialogs error={error}
                 addPost={addPost}
                 dialogs={props.dialogs}
                 addTextMessage={addTextMessage}
        />
    )
}