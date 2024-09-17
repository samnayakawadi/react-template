import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "shivaji-ui"
import { globalActions } from "./global/redux/globalSlice.js"

function App() {

  const globalState = useSelector(prevState => prevState.global)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(globalActions.updateAppName("My App"))
  }, [])

  return (
    <Card margin="2" color="success">
      {globalState.appName}
    </Card>
  )
}

export default App