import React from 'react'
import Login from "./Login";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";


const LoginContainer = (props) => {
    if (props.isAuth) return <Redirect to={'/profile'}/>;
    return <Login {...props}/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaImgURL: state.auth.captchaImgURL
        // loginFailed: state.auth.loginFailedMessage,
    }
};
const mapDispatchToProps = {
    loginThunkCreator
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);