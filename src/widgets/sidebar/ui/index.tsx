import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { SideBarMenuItems } from "../config/menu-items"

export const SideBar = () => {
    return (
        <Sider width={216}>
            <Menu
            mode="vertical"
            defaultSelectedKeys={['1']}
            style={{ height: '100%'}}
            items={SideBarMenuItems}

            onSelect={(item) => {
                debugger
                
            }}
            />
        </Sider>
    )
}