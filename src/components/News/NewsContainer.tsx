import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {News} from "./News";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";


let mapSateToProps = (state: AppStateType) => {
    return {
    }
}

// let mapDispatchToProps = (dispatch:(action: ActionType) => void) => {
//     return {
//         addPost: () => dispatch(AddMessage()),
//         addTextMessage: (text:string) => {dispatch(TextAddMessage(text))
//         }
//     }
// }


export const NewsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapSateToProps, {    })
    )(News)