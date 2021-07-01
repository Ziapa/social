import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Music} from "./Music";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";


let mapSateToProps = (state: AppStateType) => {
    return {}
}

// let mapDispatchToProps = (dispatch:(action: ActionType) => void) => {
//     return {
//         addPost: () => dispatch(AddMessage()),
//         addTextMessage: (text:string) => {dispatch(TextAddMessage(text))
//         }
//     }
// }


export const MusicContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapSateToProps, {})
)(Music)


