import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "../global/redux/globalSlice.js";
import { dashboardReducer } from "../components/dashboard/redux/dashboardSlice.js";
import { bulkAddInstitutionsReducer } from "../features/feature_bulkAddInstitutions/redux/bulkAddInstitutionsSlice.js";

export const store = configureStore({
    reducer: {
        global: globalReducer,
        dashboard: dashboardReducer,
        feature_bulkAddInstitutions: bulkAddInstitutionsReducer
    }
})