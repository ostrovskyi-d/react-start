import React, {useEffect} from 'react';
import './MyProfile.module.scss'
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setStatus, setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    let {match: {params}, getUserProfile, getStatus, loggedInID} = props;
    useEffect(() => {
        let userId = params.userId;
        if (!userId) userId = loggedInID;
        getUserProfile(userId);
        getStatus(userId);
    }, [getStatus, getUserProfile, loggedInID, params.userId]);

    return <MyProfile
        {...props}
        userId={props.match.params.userId}
        status={props.status}
        updateStatus={props.setStatus}
    />
};

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
        status: state.profilePage.status,
        loggedInID: state.auth.userId
    }
};


export default compose(
    connect(mapStateToProps, {
            setUserProfileAC,
            getUserProfile,
            getStatus,
            setStatus
        }
    ),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);