import {connect} from "react-redux";
import {Friends} from "./Friends";
import {RootStateType} from "../../redux/store";
import {ActionType} from "../../redux/users-reducer";

let mapStateToProps = (state: RootStateType) => {
    return{
        dialogsPage: state.dialogsPage
    }
}


let mapDispatchToProps = (dispatch: (action: ActionType)=>void) => { return{

}}

export const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)
