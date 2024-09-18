import { createSlice } from "@reduxjs/toolkit";
import { bulkAddInstitutionsState } from "./bulkAddInstitutionsState.js";
import { bulkAddInstitutionsReducers } from "./bulkAddInstitutionsReducers.js";

const bulkAddInstitutionsSlice = createSlice({
    name: "bulkAddInstitutionsSlice",
    initialState: bulkAddInstitutionsState,
    reducers: bulkAddInstitutionsReducers
})

export const bulkAddInstitutionsActions = bulkAddInstitutionsSlice.actions
export const bulkAddInstitutionsReducer = bulkAddInstitutionsSlice.reducer