import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store";
import {ActionType, FollowAC, UnFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: RootStateType) => {
    return{
        users: state.usersPage
    }
}


let mapDispatchToProps = (dispatch: (action: ActionType)=>void) => {
    return  {
        follow: (usersID: string) => {dispatch(FollowAC(usersID))},
        unFollow:(usersID: string) => {dispatch(UnFollowAC(usersID))}
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)