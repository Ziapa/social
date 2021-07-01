import {addPost, addTextMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";


let mapSateToProps = (state: AppStateType) => {
    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message,
        textAddMessage: state.dialogsPage.textAddMessage,
    }
}


export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapSateToProps, {addPost, addTextMessage})
)(Dialogs)