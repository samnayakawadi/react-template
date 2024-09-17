export const dashboardReducers = {
    updateCurrentSelectedMenuIndex: (prevState, actions) => {
        prevState.currentSelectedMenuIndex = actions.payload
    }
}