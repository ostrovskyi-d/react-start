import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import {BrowserRouter, Route} from 'react-router-dom'


const App = (props) => {

    let ProfilePage =
        <Profile
            state={props.state}
            dispatch={props.dispatch}
        />;




    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <SideBar/>
                <div className="app-wrapper-content">
                    <Route
                        exact path="/"
                        render={() => ProfilePage}
                    />

                    <Route
                        path="/dialogs"
                        render={() => <Dialogs
                            state={props.state}
                            dispatch={props.dispatch}
                        />}
                    />

                    <Route
                        path="/profile"
                        render={() => ProfilePage}
                    />

                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;