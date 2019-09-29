import React from 'react';
import './App.css';
// components
import Header from './components/Header/Header.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Profile from './components/Content/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
// extra-modules
import { BrowserRouter, Route } from 'react-router-dom'


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <SideBar />
                <div className="app-wrapper-content">
                    
                    <Route path="/dialogs" render={() => ( 
                        <Dialogs contactsData={props.contactsData} messageData={props.messageData} />
                    )} />

                    <Route path="/profile" render={() => (
                        <Profile postsData={props.postsData} />
                    )} />
                    
                    <Route path="/news" render={News} />
                    <Route path="/music" render={Music} />
                    <Route path="/settings" render={Settings} />
                </div>
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    )
}



export default App;