import { combineReducers, createStore } from "@reduxjs/toolkit";
import LoginAuth from "../reducer/user/login"

const rootReducer = combineReducers({
    LoginAuth,
})

const Store = createStore(
    rootReducer
);

export default Store;