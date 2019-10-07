import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from './redux/redux-store';
import App from "./App.jsx"
import "./index.css";

let rerenderEntireTree = () => {
    // debugger
    return (
        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>,
            document.getElementById("root"))
    )

};
rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);