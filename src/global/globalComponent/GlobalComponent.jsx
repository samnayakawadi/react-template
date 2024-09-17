import { useEffect } from "react"
import GlobalHandlers from "../globalHandlers.js"

const GlobalComponent = () => {

    const globalHandlers = GlobalHandlers()

    useEffect(()=> {
        globalHandlers.globalComponentHandlers.handler1()
    }, [])

    return (
        <div>GlobalComponent</div>
    )
}

export default GlobalComponent