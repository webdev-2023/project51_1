// for the 'store' to access the reducer and the actions applicable to the of the state, importing the reducer from accountSlice.js
import { configureStore } from "@reduxjs/toolkit"
import acctReducer from "./features/accountSlice"

// adding the accoutSlice reducer to the store
export default configureStore({
    reducer: {
        account: acctReducer
    }
})
