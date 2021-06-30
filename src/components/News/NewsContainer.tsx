import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {News} from "./News";


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


export const NewsContainer = connect(mapSateToProps, {
    })(News);