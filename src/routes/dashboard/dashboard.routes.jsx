import { Route, Routes } from "react-router"
import { Basis, Card, FlexBox } from "shivaji-ui"
import Menu from "../../components/dashboard/components/menu/Menu.jsx"
import Navbar from "../../components/dashboard/components/navbar/Navbar.jsx"

const DashboardRoutes = () => {
    return (
        <FlexBox otherClasses="w-full h-full" justify="center" align="stretch" direction="col" gap="2">
            <Navbar />
            <FlexBox gap="2" otherClasses="h-full">
                <Basis size="2/12" otherClasses="h-full">
                    <Menu />
                </Basis>
                <Basis size="10/12" otherClasses="h-full">
                    <Card otherClasses="h-full">
                        <Routes>
                            <Route path="bulk-add-institution" />
                        </Routes>
                    </Card>
                </Basis>
            </FlexBox>
        </FlexBox>
    )
}

export default DashboardRoutes