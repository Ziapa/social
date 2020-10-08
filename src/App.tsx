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
import {RootStateType} from "./redux/state";

type StatePropsType = {
    state: RootStateType
    addPost: () => void
    textAddPost: (newText:string) => void
    textAddMessage: (newText:string) => void
    addMessage: () => void
}

function App(props: StatePropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               textAddPost={props.textAddPost}
                           />}/>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               addMessage={props.addMessage}
                               textAddMessage={props.textAddMessage}
                               dialogs={props.state.dialogsPage}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Setting/>}/>
                </div>
            </div>
        </div>


    );
}

export default App;
