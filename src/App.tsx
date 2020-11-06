import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile/>}/>
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/news"}
                           render={() => <News/>}/>
                    <Route path={"/music"}
                           render={() => <Music/>}/>
                    <Route path={"/settings"}
                           render={() => <Setting/>}/>
                </div>
            </div>
        </div>


    );
}

export default App;
