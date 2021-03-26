import {addPost, addTextMessage} from "../../redux/dialogs-reducer";
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

// let mapDispatchToProps = (dispatch:(action: ActionType) => void) => {
//     return {
//         addPost: () => dispatch(AddMessage()),
//         addTextMessage: (text:string) => {dispatch(TextAddMessage(text))
//         }
//     }
// }


export const DialogsContainer = connect(mapSateToProps, {
    addPost,addTextMessage})(Dialogs);