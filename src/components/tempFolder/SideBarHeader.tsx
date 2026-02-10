import {iconMapper} from "../../utils/IconMapper.ts";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const SideBarHeader = () => {
    const IconComponent = iconMapper["truck"] || HelpOutlineIcon;

    return (
        <div className="relative h-8 flex items-center gap-4 p-4 top-6">
        <span className="p-2 bg-tertiary rounded-2xl">
            <IconComponent
                fontSize = "large"
                className = "color"
            />
        </span>

            <span className="font-bold text-2xl">Garage Control</span>
        </div>
    );
};
export default SideBarHeader;