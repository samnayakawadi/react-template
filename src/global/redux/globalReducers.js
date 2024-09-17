export const globalReducers = {
    updateAppName: (prevState, actions) => {
        prevState.appName = actions.payload
    }
}