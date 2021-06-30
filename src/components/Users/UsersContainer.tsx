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
import {Redirect} from "react-router-dom";


export class UserContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getUsers(this.props.userPageCount)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber)
    }




    render() {

        if (!this.props.isLogin) return <Redirect to="/login"/>

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
        isLogin: state.auth.isLogin,
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

export const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unFollow,
        disable,
        getUsers,
        following,
        unFollowing
    })(UserContainer)