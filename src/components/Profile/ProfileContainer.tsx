import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, reducerPropsType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";

type PropsType = reducerPropsType & RouteComponentProps<{ userId: string }>

export class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12411"
        }

        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            withCredentials: true
        })
            .then((res) => {
                this.props.setProfile(res.data)
            })
    }

    componentDidUpdate() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12411"
        }

        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            withCredentials: true
        })
            .then((res) => {
                this.props.setProfile(res.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapSateToProps = (state: AppStateType)  => ({
    profile: state.profilePage.profile
})


export default withRouter(connect(mapSateToProps, {setProfile})(ProfileContainer))

