import React from 'react';
import './MyProfile.module.scss'
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setStatus, setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4889;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)


    }

    render() {
        return (
            <main>
                <MyProfile
                    {...this.props}
                    userId = {this.props.match.params.userId}
                    status={this.props.status}
                    updateStatus={this.props.setStatus}
                />
            </main>
        )
    }
}

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