import { Route, Routes } from "react-router"
import DashboardRoutes from "./dashboard/dashboard.routes.jsx"
import DefaultRoutes from "./default/default.routes.jsx"

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultRoutes />} />
        <Route path="/dashboard" element={<DashboardRoutes />} />
      </Routes>
    </>
  )
}

export default MainRoutes