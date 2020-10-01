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

export type PostType = {
    name: string
    time: string
    avatar: string
    message: string
    like: number
}

export type DialogsType = {
    name: string
    id: number
}

export type MessagesType = {
    message: string
    id: number
}

type AppPropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}


function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Setting}/>
                </div>
            </div>
        </div>


    );
}

export default App;
