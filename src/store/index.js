import {configureStore, createSlice} from "@reduxjs/toolkit";
import loginReducer from './loginSlice';
import expenseReducer from './expenseStore';

const store=configureStore({
    reducer: {login: loginReducer, expense: expenseReducer}
})

export default store;
