import storage from 'redux-persist/lib/storage'

// This is the default state if one does not exist.
const initialState = {

}

// The reducer isolates changes to the state of the application,
// only altering the minimum necessary to prevent unnecessary
// rendering where possible
// Each time it is called, it is passed the current state
// and an action which consists of an Action type and the payload
// for the state changes.
const AppReducers = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

// This configures the persistence for the state of this reducer,
// which is set below to store the state as the key 'app' and
// the storage variable is just directing it to use localStorage
export const persistAppConfig = {
    key: 'app',
    storage
}

export default AppReducers