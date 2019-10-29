import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getMyUserDataThunkCreator, setUserDataAC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMyUserDataThunkCreator();
    };

    render() { return <Header {...this.props} /> };

}

const mapStateToProps = (state) => ({
    isAuth: state.auth._isAuth,
    ...state.auth
});

export default connect(mapStateToProps, {setUserDataAC, getMyUserDataThunkCreator})(HeaderContainer);