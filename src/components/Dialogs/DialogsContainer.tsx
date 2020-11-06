import {ActionType, RootStateType} from "../../redux/store";
import {AddMessageAC, TextAddMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapSateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage
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