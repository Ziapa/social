import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {authReducerPropsType, InitialStateAuthType, setDataAuth} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type mapStatePropsType = {}

type mapDispatchPropsType = {
    setDataAuth: (data: InitialStateAuthType) => void
}

type authMeType = {
    data: {id: number, login: string, email: string}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}




class HeaderContainer extends React.Component<authReducerPropsType> {

    componentDidMount() {
        axios.get<authMeType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0)
                this.props.setDataAuth(res.data.data)
            })
    }

    render() {
        return <Header/>
    }

}

const mapSateToProps = (state: AppStateType): mapStatePropsType  => ({

})

export default connect(mapSateToProps,{setDataAuth})(HeaderContainer)

