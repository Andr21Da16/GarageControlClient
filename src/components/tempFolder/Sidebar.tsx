
import "../../index.css"
import type {SidebarItem} from "../../data/types.ts";
import SideBarHeader from "./SideBarHeader.tsx";
import ItemSideBar from "./ItemSideBar.tsx";
import UserInfo from "./UserInfo.tsx";


const items: SidebarItem[] = [
    { name: "Dashboard", icon: "dashboard", path: "" },
    { name: "Vehicle Entry", icon: "input", path: "entry" },
    { name: "Check-out", icon: "checkout", path: "checkout"},
    { name: "Map View", icon: "map", path: "map" },
    { name: "Companies", icon: "business", path: "companies"},
    { name: "Billing", icon: "payments", path: "billing"},
];

const Sidebar = () => {


    return (
        <div className="relative flex flex-col pt-4 gap-8 h-full">
            <SideBarHeader/>
            <nav className="flex flex-col overflow-y-auto p-4 gap-2 relative top-4">
                {
                    items.map((item: SidebarItem) => (
                          <ItemSideBar
                            key={item.name}
                            name={item.name}
                            icon={item.icon}
                            path={item.path}
                          />
                    )
                )}
            </nav>
            <UserInfo
                user="OP"
                name="Admin Operator"
                rol="Day Shift"
            />
            
        </div>
    )
}




export default Sidebar