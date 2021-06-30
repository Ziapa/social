import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, reducerPropsType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PropsType = reducerPropsType & RouteComponentProps<{ userId: string }>

export class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {

        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    componentDidUpdate() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12411"
        }
        this.props.getUserProfile(userId)
    }


    render() {
        if (!this.props.isLogin) return <Redirect to="/login"/>

        return <Profile
            profile={this.props.profile}/>
    }
}

const mapSateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        isLogin: state.auth.isLogin
    }
}


export default withRouter(connect(mapSateToProps, {getUserProfile})(ProfileContainer))

