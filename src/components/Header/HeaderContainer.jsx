import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getMyUserDataThunkCreator, setUserDataAC} from "../../redux/auth-reducer.js";
import {logOutThunkCreator} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    const {getMyUserDataThunkCreator} = props;
    useEffect(() => getMyUserDataThunkCreator(), [getMyUserDataThunkCreator]);
    return <Header {...props}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    ...state.auth
});


export default connect(mapStateToProps, {
    setUserDataAC,
    getMyUserDataThunkCreator,
    logOutThunkCreator
})(HeaderContainer);