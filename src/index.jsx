import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/state';
import App from "./App.jsx"

import "./index.css";



let rerenderEntireTree = () => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>,  
        document.getElementById("root"))
    )
    
}
rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);