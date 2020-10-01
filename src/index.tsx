import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {name: "Shana", time: "10:00", avatar: "https://www.blexar.com/avatar.png", message: "privet", like: 12},
    {name: "Dart", time: "10:23", avatar: "https://html5css.ru/w3css/img_avatar3.png", message: "bye", like: 25},
    {name: "Dart", time: "10:23", avatar: "https://html5css.ru/w3css/img_avatar3.png", message: "bye", like: 25}
]

let dialogs = [
    {name: "Den", id: 1},
    {name: "SmiT", id: 2},
    {name: "Braun", id: 3}
]

let messages = [
    {message: "Hi", id: 1},
    {message: "How are you?", id: 2},
    {message: "Yo", id: 3}
]


ReactDOM.render(<BrowserRouter> <App posts={posts} dialogs={dialogs} messages={messages}/>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
