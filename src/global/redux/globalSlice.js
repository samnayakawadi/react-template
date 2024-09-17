import { createSlice } from "@reduxjs/toolkit";
import { globalInitialState } from "./globalState.js";
import { globalReducers } from "./globalReducers.js";

const globalSlice = createSlice({
    name: "globalSlice",
    initialState: globalInitialState,
    reducers: globalReducers
})

export const globalActions = globalSlice.actions
export const globalReducer = globalSlice.reducer