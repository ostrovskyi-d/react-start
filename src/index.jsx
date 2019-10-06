import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import StoreContext from "./StoreContext";

import store from './redux/redux-store';
import App from "./App.jsx"

import "./index.css";


let rerenderEntireTree = () => {
    // debugger
    return (
        ReactDOM.render(
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                <App
<<<<<<< HEAD
                    // store={store}
=======
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
>>>>>>> 35501aee448360699b37b9e0a06a091486800594
                />
                </StoreContext.Provider>
            </BrowserRouter>,
            document.getElementById("root"))
    )

};
rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);