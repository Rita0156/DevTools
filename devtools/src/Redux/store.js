
import reducer from "./Appreducer/reducer";
import {applymiddleware,legacy_createStore} from 'redux'
import thunk from "redux-thunk"

const store=legacy_createStore(reducer,applymiddleware(thunk))

export default store
