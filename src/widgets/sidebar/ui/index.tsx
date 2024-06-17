import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { SideBarMenuItems } from "../config/menu-items"
import { useRouter } from "next/navigation"

export const SideBar = () => {
    const router = useRouter()
    return (
        <Sider width={216}>
            <Menu
            mode="vertical"
            defaultSelectedKeys={['1']}
            style={{ height: '100%'}}
            items={SideBarMenuItems}
            onClick={(item) => {
                router.push(SideBarMenuItems.find(i => i.key === item.key)?.path ?? '')                
            }}
            />
        </Sider>
    )
}