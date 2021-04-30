import React from "react";
import {Header} from "./Header";
import {authReducerPropsType, setDataAuth} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {authAPI} from "../../DAL/API";

type authMeType = {
    data: {id: number, login: string, email: string}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}




class HeaderContainer extends React.Component<authReducerPropsType> {

    componentDidMount() {
        authAPI.authMe()
            .then((res) => {
                if (res.data.resultCode === 0)
                this.props.setDataAuth(res.data.data)
            })
    }

    render() {
        return <Header isLogin={this.props.isLogin}/>
    }

}

const mapSateToProps = (state: AppStateType) => ({
 isLogin: state.auth.isLogin
})

export default connect(mapSateToProps,{setDataAuth})(HeaderContainer)

