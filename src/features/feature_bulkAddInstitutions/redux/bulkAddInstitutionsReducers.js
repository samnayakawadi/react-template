export const bulkAddInstitutionsReducers = {
    updateCurrentComponent: (prevState, actions) => {
        prevState.currentComponent = actions.payload
    },
    selectFile: (prevState, actions) => {
        // Important flags
        prevState.selectExcel.isThisStepCompleted = false
        prevState.selectExcel.isValidFileType = false

        const file = actions.payload
        if (file) {
            prevState.selectExcel.selectedExcelFile = file
            if (actions.payload.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                prevState.selectExcel.isValidFileType = true
                prevState.selectExcel.isThisStepCompleted = true
            }
        }
    },
}