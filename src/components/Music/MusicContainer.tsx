import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Music} from "./Music";


let mapSateToProps = (state: AppStateType) => {
    return {
        isLogin: state.auth.isLogin,

    }
}

// let mapDispatchToProps = (dispatch:(action: ActionType) => void) => {
//     return {
//         addPost: () => dispatch(AddMessage()),
//         addTextMessage: (text:string) => {dispatch(TextAddMessage(text))
//         }
//     }
// }


export const MusicContainer = connect(mapSateToProps, {
    })(Music);