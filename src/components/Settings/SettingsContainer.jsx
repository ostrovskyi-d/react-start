import React from 'react';
import Settings from "./Settings";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const SettingsContainer = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>;
    return <Settings {...props} />
};

const mapStateToProps = (state) => {
 return{
    isAuth: state.auth.isAuth
 }
};
export default connect(mapStateToProps)(SettingsContainer);