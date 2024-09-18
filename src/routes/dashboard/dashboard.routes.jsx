import { Route, Routes } from "react-router"
import { Basis, FlexBox } from "shivaji-ui"
import Menu from "../../components/dashboard/components/menu/Menu.jsx"
import Navbar from "../../components/dashboard/components/navbar/Navbar.jsx"
import BulkAddInstitutions from "../../features/bulk-add-institutions/BulkAddInstitutions.jsx"

const DashboardRoutes = () => {
    return (
        <FlexBox otherClasses="w-full h-full" justify="center" align="stretch" direction="col" gap="2">
            <Navbar />
            <FlexBox gap="2" otherClasses="h-full">
                <Basis size="2/12" otherClasses="h-full">
                    <Menu />
                </Basis>
                <Basis size="10/12" otherClasses="h-full">
                    <Routes>
                        <Route path="bulk-add-institutions" element={<BulkAddInstitutions />} />
                    </Routes>
                </Basis>
            </FlexBox>
        </FlexBox>
    )
}

export default DashboardRoutes