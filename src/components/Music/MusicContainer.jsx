import React from 'react';
import Music from "./Music";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const MusicContainer = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'} />;
    return <Music {...props}/>
};

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth
    }
};
export default connect(mapStateToProps)(MusicContainer);