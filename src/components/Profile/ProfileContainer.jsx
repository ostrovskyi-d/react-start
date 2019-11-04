import React from 'react';
import './MyProfile.module.scss'
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getUserProfileByIdThunkCreator, setUserProfileAC} from "../../redux/profile-reducer";
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
    }

    render() {
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
    }
};


export default compose(
    connect(mapStateToProps, {
            setUserProfileAC,
            getUserProfileByIdThunkCreator,
        }
    ),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);