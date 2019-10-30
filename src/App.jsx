import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom'

import SideBar from './components/SideBar/SideBar.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <SideBar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}
                    />
                    <Route path={`/login`}
                           render={() => <LoginContainer/>}
                    />

                    <Route path={`/profile/:userId`}
                           render={() => <ProfileContainer/>}
                    />
                    <Route exact path={`/profile`}
                           render={() => <ProfileContainer/>}
                    />
                    <Route exact path={`/`}
                           render={() => <ProfileContainer/>}
                    />

                    <Route path="/users"
                           render={() => <UsersContainer/>}
                    />
                    <Route path="/news"
                           render={() => <NewsContainer/>}
                    />
                    <Route path="/music" render={() => <MusicContainer/>}/>
                    <Route path="/settings" render={() => <SettingsContainer/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
};

export default App;