import React from 'react';
import './App.scss';

import SideBar from './components/SideBar/SideBar.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


const App = () => {
    let DialogsPageContainer =
        <DialogsContainer/>;
    let UsersPageContainer =
        <UsersContainer/>;

    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <SideBar/>

                <div className="app-wrapper-content">
                    <Route
                        path="/dialogs"
                        render={() => DialogsPageContainer}
                    />
                    <Route
                        path={`/login`}
                        render={() => <LoginContainer/>}
                    />
                    <Route
                        path={`/profile/:userId?`}
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        exact path={`/profile`}
                        render={() => <ProfileContainer/>}
                    />

                    <Route
                        path="/users"
                        render={() => UsersPageContainer}
                    />
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    )
};

export default App;