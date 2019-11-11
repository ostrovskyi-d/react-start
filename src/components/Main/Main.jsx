import React from "react";
import DialogsContainer from "../Dialogs/DialogsContainer";
import LoginContainer from "../Login/LoginContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";
import NewsContainer from "../News/NewsContainer";
import MusicContainer from "../Music/MusicContainer";
import SettingsContainer from "../Settings/SettingsContainer";
import {Route} from "react-router-dom";
import Notes from "../Notes/Notes";

const Main = (props) => {

    return (
        <div>

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
            <Route path="/notes" render={() => <Notes/>}/>
            <Route path="/settings" render={() => <SettingsContainer/>}/>
        </div>

    )
};


export default Main;