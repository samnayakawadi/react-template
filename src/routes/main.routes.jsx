import { Route, Routes } from "react-router"
import DashboardRoutes from "./dashboard/dashboard.routes.jsx"
import DefaultRoutes from "./default/default.routes.jsx"

const MainRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<DefaultRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </div>
  )
}

export default MainRoutes