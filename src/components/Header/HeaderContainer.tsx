import React from "react";
import {Header} from "./Header";
import {authReducerPropsType, setUserAuthData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type authMeType = {
    data: {id: number, login: string, email: string}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}




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

export default connect(mapSateToProps,{setUserAuthData})(HeaderContainer)

