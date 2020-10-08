import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, RootStateType, textAddMessage, textAddPost, addMessage} from "./redux/state";
import React from "react";

export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(<BrowserRouter> <App state={state}
                                         addPost={addPost}
                                         addMessage={addMessage}
                                         textAddMessage={textAddMessage}
                                         textAddPost={textAddPost}
        /></BrowserRouter>,
        document.getElementById('root'));
}