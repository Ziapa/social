import './index.scss';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addPost, textAddMessage, textAddPost, subscribe} from "./redux/state"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter> <App state={state}
                                         addPost={addPost}
                                         addMessage={addMessage}
                                         textAddMessage={textAddMessage}
                                         textAddPost={textAddPost}
        /></BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree()

subscribe(rerenderEntireTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
