import {connect} from "react-redux";
import {Users} from "./Users";
import {UsersType} from "../../redux/store";
import {
    ActionType,
    FollowAC,
    UnFollowAC,
    setUsersAC,
    setUserCountAC,
    setPageActiveAC
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        userCount: state.usersPage.userCount,
        userPageCount: state.usersPage.userPageCount,
        pageActive: state.usersPage.pageActive
    }
}


let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (usersID: string) => {
            dispatch(FollowAC(usersID))
        },
        unFollow: (usersID: string) => {
            dispatch(UnFollowAC(usersID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setPageActive: (page: number) => {
            dispatch(setPageActiveAC(page))
        },
        setUsersCounter: (usersCounter: number) => {
            dispatch(setUserCountAC(usersCounter))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)