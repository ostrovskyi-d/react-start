import React from 'react';
import './MyProfile.module.scss'
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getUserProfileByIdThunkCreator, setUserProfileAC} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4889;
        }
        this.props.getUserProfileByIdThunkCreator(userId);
    }

    render() {

        // if(!this.props.isAuth) return <Redirect to={`/login`}/>;
        return (
            <main>
                <MyProfile {...this.props}/>
            </main>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
        isAuth: state.auth.isAuth
    }
};
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileAC, getUserProfileByIdThunkCreator,})(withUrlDataContainerComponent);