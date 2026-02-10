import {iconMapper} from "../../utils/IconMapper.ts";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {NavLink} from "react-router";
import type {SidebarItem} from "../../data/types.ts";

const ItemSideBar = ({name, icon, path}:SidebarItem) =>{
    const IconComponent = iconMapper[icon] || HelpOutlineIcon;

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-md transition-colors ${
                    isActive
                        ? "bg-tertiary text-black color"
                        : "text-gray hover:bg-slate-800"
                }`
            }
        >
            <IconComponent fontSize="medium" />
            <span className="font-bold text-[1.1rem]">{name}</span>
        </NavLink>

    )
}
 export default ItemSideBar;