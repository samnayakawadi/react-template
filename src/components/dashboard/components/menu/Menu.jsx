import { useSelector } from "react-redux"
import { Button, Card, FlexBox } from "shivaji-ui"

const Menu = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)

    // const renderMenuTitle = () => {
    //     return (
    //         <span>Dashboard Menu</span>
    //     )
    // }

    const renderMenuItems = () => {
        return (
            dashboardState.dashboardMenu.menuItems.map((singleMenuItem, singleMenuIndex) => {
                return (<Button key={singleMenuIndex} type={2} width="full">{singleMenuItem.menuTitle}</Button>)
            })
        )
    }

    return (
        <Card otherClasses="h-full">
            {/* <FlexBox padding="3" otherClasses="mb-2">
                {renderMenuTitle()}
            </FlexBox> */}
            <FlexBox direction="col" gap="2">
                {renderMenuItems()}
            </FlexBox>
        </Card>
    )
}

export default Menu