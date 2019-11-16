import React from 'react'
import Login from "./Login";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        if(this.props.isAuth) return <Redirect to={'/profile'}/>;
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        // loginFailed: state.auth.loginFailedMessage,
    }
};
const mapDispatchToProps = {
    loginThunkCreator
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);