import type { SidebarItem } from "../../data/types";
import SideBarHeader from "./SideBarHeader";
import ItemSideBar from "./ItemSideBar";
import UserInfo from "./UserInfo";

const items: SidebarItem[] = [
    { name: "Dashboard", icon: "dashboard", path: "" },
    { name: "Vehicle Entry", icon: "input", path: "entry" },
    { name: "Check-out", icon: "checkout", path: "checkout" },
    { name: "Map View", icon: "map", path: "map" },
    { name: "Companies", icon: "business", path: "companies" },
    { name: "Billing", icon: "payments", path: "billing" },
];

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full pt-4 gap-8 min-w-0">
            <SideBarHeader />

            <nav className="flex flex-col gap-2 p-4 overflow-y-auto min-w-0">
                {items.map((item) => (
                    <ItemSideBar key={item.name} {...item} />
                ))}
            </nav>

            <UserInfo
                user="OP"
                name="Admin Operator"
                rol="Day Shift"
            />
        </div>
    );
};

export default Sidebar;
