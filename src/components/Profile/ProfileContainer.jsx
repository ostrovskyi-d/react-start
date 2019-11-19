import React, {useEffect, useRef} from 'react';
import './MyProfile.module.scss'
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setStatus, setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    let {match: {params}, getUserProfile, getStatus} = props;
    useEffect(() => {
        let userId = params.userId;
        if (!userId) userId = 4889;
        getUserProfile(userId);
        getStatus(userId);
    }, [getStatus, getUserProfile, params.userId]);

    return <main>
        <MyProfile
            {...props}
            userId={props.match.params.userId}
            status={props.status}
            updateStatus={props.setStatus}
        />
    </main>
};

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
        status: state.profilePage.status
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