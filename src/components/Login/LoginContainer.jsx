import React from 'react'
import Login from "./Login";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class LoginContainer extends React.Component {

    render() {
        if(this.props.isAuth) return <Redirect to={'/profile'}/>;
        return <Login/>
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps)(LoginContainer);