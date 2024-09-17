import { FlexBox } from "shivaji-ui"
import MainRoutes from "./routes/main.routes.jsx"

function App() {

  // return (
  // <div className="flex flex-row justify-center items-stretch h-screen">
  //   <MainRoutes />
  // </div>
  // )

  return (
    <FlexBox direction="row" padding="2" justify="center" align="stretch" otherClasses="h-screen">
      <MainRoutes />
    </FlexBox>
  )
}

export default App