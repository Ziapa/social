import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, reducerPropsType, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PropsType = reducerPropsType & RouteComponentProps<{ userId: string }>

export class ProfileContainer extends React.Component<PropsType> {




    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12411"
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12411"
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }


    render() {


        return <Profile
            updateStatus={this.props.updateStatus}
            textStatus={this.props.textStatus}
            profile={this.props.profile}/>
    }
}

const mapSateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        textStatus: state.profilePage.textStatus,
    }
}

export default compose<React.ComponentType>(
    connect(mapSateToProps, {updateStatus, getUserStatus, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


