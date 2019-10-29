import React from 'react';
import News from "./News";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";


const NewsContainer = (props) => {
    if(!props.isAuth) return <Redirect to={"/login"}/>
    return <News {...props}/>
};

let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
};

export default connect(mapStateToProps) (NewsContainer);

