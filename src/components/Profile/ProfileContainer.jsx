import React, {useEffect} from 'react';
import './MyProfile.module.scss'
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, setStatus, setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserData, getCurrentStatus} from "../../redux/profile-selectors";

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
        userData: getUserData(state),
        status: getCurrentStatus(state),
        loggedInID: state.auth.userId
    }
};


export default compose(
    connect(mapStateToProps, {
            setUserProfileAC,
            getUserProfile,
            setStatus,
            getStatus,
        }
    ),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);