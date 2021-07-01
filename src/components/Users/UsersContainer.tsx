import {connect} from "react-redux";
import {Users} from "./Users";
import {
    disable,
    follow,
    getUsers,
    unFollow,
    following,
    unFollowing
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export class UserContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getUsers(this.props.userPageCount)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber)
    }




    render() {


        return (this.props.isFetching ?
            <Users
                users={this.props.users}
                following={this.props.following}
                disable={this.props.disable}
                unFollowing={this.props.unFollowing}
                setUsers={this.props.setUsers}
                followingInProgress={this.props.followingInProgress}
                userCount={this.props.userCount}
                pageActive={this.props.pageActive}
                onPageChanged={this.onPageChanged}
                setPageActive={this.props.setPageActive}
                userPageCount={this.props.userPageCount}
                setUsersCount={this.props.setUsersCounter}
            /> : <div>Идет загрузка...</div>)
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        userCount: state.usersPage.userCount,
        userPageCount: state.usersPage.userPageCount,
        pageActive: state.usersPage.pageActive,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow: (usersID: string) => {
//             dispatch(FollowAC(usersID))
//         },
//         unFollow: (usersID: string) => {
//             dispatch(UnFollowAC(usersID))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setPageActive: (page: number) => {
//             dispatch(setPageActiveAC(page))
//         },
//         setUsersCounter: (usersCounter: number) => {
//             dispatch(setUserCountAC(usersCounter))
//         },
//         setFetching: () => {
//             dispatch(setFetchingAC())
//         },
//         setFetchingFalse: () => {
//             dispatch(setFetchingFalseAC())
//         }
//     }
// }

export const UsersContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            disable,
            getUsers,
            following,
            unFollowing
        })
    )(UserContainer)
