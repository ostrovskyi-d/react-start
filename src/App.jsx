import React from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom'

import HeaderContainer from "./components/Header/HeaderContainer";
import MainContainer from "./components/Main/MainContainer";
import s from "./App.css";


const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer className={s.headerWrapper} />
                <MainContainer />
            </div>
        </BrowserRouter>
    )
};

export default App;