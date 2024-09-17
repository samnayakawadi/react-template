import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "../global/redux/globalSlice.js";

export const store = configureStore({
    reducer: {
        global: globalReducer
    }
})