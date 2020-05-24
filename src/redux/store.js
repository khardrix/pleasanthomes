import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root-reducer";

// creates the saga middleware object
const sagaMiddleware = createSagaMiddleware()

// An array of middleware that will be applied to redux
const middleware = [sagaMiddleware]

// The logger middleware is not used in production
if(process.env.NODE_ENV !== 'production')
    middleware.push(logger)

// This creates the application store and applies the middleware
export const store = createStore(rootReducer, applyMiddleware(...middleware))

// This saves the application state between visits.
export const persist = persistStore(store)

// Will enable this when sagas are needed
// sagaMiddleware.run()