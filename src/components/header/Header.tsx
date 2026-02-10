
import { CampaignRounded } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { useMatches } from "react-router";
import type {ButtonProps, RouteHandle} from "../../data/types.ts";
import SearchBar from "./SearchBar.tsx";
import ButtonsHeader from "./ButtonsHeader.tsx";


const Header = () => {

    const buttons : ButtonProps[]= [
        {icon: "download", name: "Export"},
        {icon: "document", name: "Reports"}
    ]

    interface MatchWithHandle {
        handle?: RouteHandle;
    }

    const matches = useMatches() as MatchWithHandle[];

    const rootMatch = matches.find(m => m.handle?.title);
    const pageMatch = matches.find(m => m.handle?.screenTitle);

    const title = rootMatch?.handle?.title ?? "";
    const screenTitle = pageMatch?.handle?.screenTitle ?? "";

    return (
       <div className="flex justify-around w-full items-center pt-2">
           <div className="flex flex-col text-2xl font-bold gap-1 relative  ">
               <span>{title}</span>
               <span>{screenTitle}</span>
           </div>
           <SearchBar/>
           <div className="flex items-center gap-4">
                {buttons.map((button) => (
                    <ButtonsHeader key={button.icon} {...button} />
                ))}

                <div className="h-6 w-px bg-gray-300" />

                <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition bg-slate-700"><CampaignRounded/></button>
                <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition bg-slate-700"><Settings/></button>
            </div>
           
       </div>
    )
}


export default Header;