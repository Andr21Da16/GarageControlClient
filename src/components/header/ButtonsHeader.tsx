import { iconMapper } from "../../utils/IconMapper";
import { HelpOutline } from "@mui/icons-material";
import type {ButtonProps} from "../../data/types.ts";



const ButtonsHeader = ({ icon, name }: ButtonProps) => {
    const Icon = iconMapper[icon] || HelpOutline;

    return (
        <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition bg-slate-700">
            <Icon fontSize="small" />
            {name && <span>{name}</span>}
        </button>
    );
};
export default ButtonsHeader;