import {ActionType} from "../../redux/store";
import {AddMessageAC, TextAddMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


let mapSateToProps = (state: AppStateType) => {
    debugger
    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message,
        textAddMessage: state.dialogsPage.textAddMessage,
    }
}

let mapDispatchToProps = (dispatch:(action: ActionType) => void) => {
    return {
        addPost: () => dispatch(AddMessageAC()),
        addTextMessage: (text:string) => {dispatch(TextAddMessageAC(text))
        }
    }
}


export const DialogsContainer = connect(mapSateToProps, mapDispatchToProps)(Dialogs);