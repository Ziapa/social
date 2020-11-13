import {connect} from "react-redux";
import {Users} from "./Users";
import {UsersType} from "../../redux/store";
import {ActionType, FollowAC, UnFollowAC, setUsersAC, setUserCountAC} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return{
        users: state.usersPage.users,
        userCount: state.usersPage.userCount
    }
}


let mapDispatchToProps = (dispatch: (action: ActionType)=>void) => {
    return  {
        follow: (usersID: string) => {dispatch(FollowAC(usersID))},
        unFollow:(usersID: string) => {dispatch(UnFollowAC(usersID))},
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setUsersCounter: (usersCounter: number) => {
            dispatch(setUserCountAC(usersCounter))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)