import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} component={Profile}/>
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Setting}/>
                </div>
            </div>
        </div>


    );
}

export default App;
