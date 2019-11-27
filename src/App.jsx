import React, {useEffect} from 'react';
import './App.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import Notes from "./components/Notes/Notes";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Preloader from "./components/Placeholders-etc/Preloader/Preloader";

import {initializeApp} from "./redux/app-reducer";


const App = (props) => {
    const {initialized, initializeApp} = props;

    useEffect(() => {
        initializeApp();
    }, []);

    if (!initialized) return <Preloader/>;
    else return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className="mainWrapper">
                <SideBarContainer/>
                <main>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}
                    />
                    <Route path={`/login`}
                           render={() => <LoginContainer/>}
                    />
                    <Route exact path={`/profile/:userId`}
                           render={() => <ProfileContainer/>}
                    />
                    <Route exact path={`/profile`}
                           render={() => <ProfileContainer/>}
                    />
                    <Route path={`/`}
                           render={() => <ProfileContainer/>}
                    />

                    <Route path="/users"
                           render={() => <UsersContainer/>}
                    />
                    <Route path="/news"
                           render={() => <NewsContainer/>}
                    />
                    <Route path="/music" render={() => <MusicContainer/>}/>
                    <Route path="/notes" render={() => <Notes/>}/>
                    <Route path="/settings" render={() => <SettingsContainer/>}/>
                </main>
            </div>
            }

        </div>
    )
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);