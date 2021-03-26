import {connect} from "react-redux";
import {Users} from "./Users";
import {UsersType} from "../../redux/store";
import {
    follow,
    unFollow,
    setUsers,
    setUserCount,
    setPageActive, setFetching, setFetchingFalse
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";

type AxiosType = {
    items: Array<UsersType>
    totalCount: number
    error: string
}

export class UserContainer extends React.Component<any> {

    componentDidMount() {
        axios.get<AxiosType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.userPageCount}`)
            .then((res) => {
                this.props.setFetching()
                this.props.setUsers(res.data.items)
                this.props.setUserCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetchingFalse()
        this.props.setPageActive(pageNumber)
        axios.get<AxiosType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.userPageCount}`)
            .then((res) => {
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
                unFollow={this.props.unFollow}
                setUsers={this.props.setUsers}
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
        isFetching: state.usersPage.isFetching
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
    {follow, unFollow, setUsers, setPageActive,
        setUserCount, setFetching, setFetchingFalse})(UserContainer)