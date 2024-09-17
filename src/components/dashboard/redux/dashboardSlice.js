import { createSlice } from "@reduxjs/toolkit";
import { dashboardState } from "./dashboardState.js";
import { dashboardReducers } from "./dashboardReducers.js";

const dashboardSlice = createSlice({
    name: "dashboardSlice",
    initialState: dashboardState,
    reducers: dashboardReducers
})

export const dashboardActions = dashboardSlice.actions
export const dashboardReducer = dashboardSlice.reducer