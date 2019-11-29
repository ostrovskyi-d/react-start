import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunkCreator, getMyUserDataThunkCreator} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getMyUserDataThunkCreator()
    });
    return <Header {...props}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    ...state.auth
});


export default connect(mapStateToProps, {logOutThunkCreator, getMyUserDataThunkCreator})(HeaderContainer);