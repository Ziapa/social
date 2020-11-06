import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})


type ReducersType = typeof  reducers
export type AppStateType = ReturnType<ReducersType>

export let store = createStore(reducers)