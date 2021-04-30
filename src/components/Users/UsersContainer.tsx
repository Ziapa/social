import {connect} from "react-redux";
import {Users} from "./Users";
import {UsersType} from "../../redux/store";
import {
    disable,
    follow,
    setFetching,
    setFetchingFalse,
    setPageActive,
    setUserCount,
    setUsers,
    unFollow,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {usersAPI} from "../../DAL/API";

type AxiosType = {
    items: Array<UsersType>
    totalCount: number
    error: string
}

export class UserContainer extends React.Component<any> {

    componentDidMount() {
        usersAPI.getUsers(this.props.pageActive, this.props.userPageCount)
            .then((res) => {
                this.props.setFetching()
                this.props.setUsers(res.data.items)
                this.props.setUserCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetchingFalse()
        usersAPI.onPageChanged(pageNumber, this.props.userPageCount)
            .then((res) => {
                this.props.setPageActive(pageNumber)
                this.props.setFetching()
                this.props.setUsers(res.data.items)
                this.props.setUserCount(res.data.totalCount)
            })
    }


    render() {

        return (this.props.isFetching ?
            <Users
                users={this.props.users}
                follow={this.props.follow}
                disable={this.props.disable}
                unFollow={this.props.unFollow}
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

export const UsersContainer = connect(mapStateToProps,
    {
        follow, unFollow, setUsers, setPageActive,
        setUserCount, disable, setFetching, setFetchingFalse
    })(UserContainer)