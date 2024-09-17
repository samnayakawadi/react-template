import { useSelector } from "react-redux"

const GlobalComponentHandlers = () => {

    const globalState = useSelector(prevState => prevState.global)

    const handler1 = () => {
        console.log("Handler 1 Called", globalState)
    }

    const globalComponentHandlers = {
        handler1
    }

    return globalComponentHandlers
}

export default GlobalComponentHandlers