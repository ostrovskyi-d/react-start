import React from 'react';
import './MyProfile.module.scss'
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileByIdThunkCreator,
    setUserProfileAC,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4889;
        }
        this.props.getUserProfileByIdThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);

    }

    render() {
        return (
            <main>
                <MyProfile {...this.props} profile={this.props.userData} status={this.props.status}/>
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
            getUserProfileByIdThunkCreator,
            getStatusThunkCreator,
            updateStatusThunkCreator
        }
    ),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);