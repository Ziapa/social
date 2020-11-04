import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {AppStateType} from './redux/redux-store';
import {Dispatch} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: AppStateType
    dispatch: Dispatch
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile
                               profilePage={props.store.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer
                               dispatch={props.dispatch}
                               dialogs={props.store.dialogsPage}/>}/>
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
