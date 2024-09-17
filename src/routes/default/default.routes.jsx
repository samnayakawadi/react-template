import { Route, Routes } from "react-router"

const DefaultRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<>Homemmmmm</>} />
            <Route path="/about" />
            <Route path="/contact" />
        </Routes>
    )
}

export default DefaultRoutes