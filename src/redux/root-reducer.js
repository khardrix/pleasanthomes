import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import AppReducers, {persistAppConfig} from "./app/app.reducers";

// This reduces the various sections of the app into a single store
const rootReducer = combineReducers({
    // this creates a persistent state for reducers
    app: persistReducer(persistAppConfig, AppReducers)
})

export default rootReducer
