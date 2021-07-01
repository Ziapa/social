import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, reducerPropsType, updateTextStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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


        return <Profile
            updateTextStatus={updateTextStatus}
            profile={this.props.profile}/>
    }
}

const mapSateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        textStatus: state.profilePage.TextStatus
    }
}

export default compose<React.ComponentType>(

    connect(mapSateToProps, {getUserProfile, updateTextStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


