
import reducer from "./Appreducer/reducer";
import {applyMiddleware,legacy_createStore,combineReducers} from 'redux'
import {thunk} from "redux-thunk"

const store=legacy_createStore(reducer,applyMiddleware(thunk))

export default store
