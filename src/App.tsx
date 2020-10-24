import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
}

const App = (props:PropsType) => {

    const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile
                               profilePage={state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               dispatch={props.store.dispatch.bind(props.store)}
                               dialogs={state.dialogsPage}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Setting/>}/>
                </div>
            </div>
        </div>


    );
}

export default App;
