import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"}
                           render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/news"}
                           render={() => <News/>}/>
                    <Route path={"/music"}
                           render={() => <Music/>}/>
                    <Route path={"/settings"}
                           render={() => <Setting/>}/>
                    <Route path={"/users"}
                           render={() => <UsersContainer/>}/>

                </div>

            </div>
        </div>


    );
}

export default App;
