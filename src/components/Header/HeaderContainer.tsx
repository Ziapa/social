import React from "react";
import {Header} from "./Header";
import {authReducerPropsType, setUserAuthData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";

class HeaderContainer extends React.Component<authReducerPropsType> {

    componentDidMount() {
        this.props.setUserAuthData()
    }

    render() {
        return <Header isLogin={this.props.isLogin}/>
    }

}

const mapSateToProps = (state: AppStateType) => ({
    isLogin: state.auth.isLogin
})


export default compose<React.ComponentType>(
    connect(mapSateToProps, {setUserAuthData})
)(HeaderContainer)


