import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
import SideBarContainer from "../SideBar/SideBarContainer";
import s from './MainContainer.module.scss';
import LoginContainer from "../Login/LoginContainer";
import {compose} from "redux";


const MainContainer = (props) => {
    return (
        props.isAuth ?
            <div className={s.mainWrapper}>
            <SideBarContainer />
            {/*Routes are in Main*/}
            <Main {...props}/>
        </div>
            : <LoginContainer />

    )

};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps, {}))(MainContainer);