import { Route, Routes } from "react-router"
import GlobalComponent from "./global/globalComponent/GlobalComponent.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GlobalComponent />} />
      </Routes>
    </>
  )
}

export default App