import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    return <Header {...props}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    ...state.auth
});


export default connect(mapStateToProps, {logOutThunkCreator})(HeaderContainer);