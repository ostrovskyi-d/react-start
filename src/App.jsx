import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Profile from './components/Profile/Profile.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import {BrowserRouter, Route} from 'react-router-dom'


const App = (props) => {
<<<<<<< HEAD
    let ProfilePage =
        <Profile
            // store={props.store}
        />;

    let DialogsPageContainer =
        <DialogsContainer
            // store={props.store}
        />;
=======

    let ProfilePage =
        <Profile
            state={props.state}
            dispatch={props.dispatch}
        />;



>>>>>>> 35501aee448360699b37b9e0a06a091486800594

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
<<<<<<< HEAD
                        render={() => DialogsPageContainer}
=======
                        render={() => <Dialogs
                            state={props.state}
                            dispatch={props.dispatch}
                        />}
>>>>>>> 35501aee448360699b37b9e0a06a091486800594
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