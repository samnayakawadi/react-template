import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "../global/redux/globalSlice.js";
import { dashboardReducer } from "../components/dashboard/redux/dashboardSlice.js";

export const store = configureStore({
    reducer: {
        global: globalReducer,
        dashboard: dashboardReducer
    }
})