import React from 'react'
import Login from "./Login";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import handleSubmit from "redux-form/lib/handleSubmit";

class LoginContainer extends React.Component {

    render() {
        if(this.props.isAuth) return <Redirect to={'/profile'}/>;
        return <Login logIn={this.logInAC}/>
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};
const mapDispatchToProps = () => {
    return {handleSubmit}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);