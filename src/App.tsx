import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";


function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <div className={"body"}>
               <NavBar />
                <Profile/>
            </div>
        </div>


    );
}

export default App;
