import { CampaignRounded, Settings } from "@mui/icons-material";
import { useMatches } from "react-router";
import type { ButtonProps, RouteHandle } from "../../data/types";
import SearchBar from "./SearchBar";
import ButtonsHeader from "./ButtonsHeader";

const Header = () => {
    const buttons: ButtonProps[] = [
        { icon: "download", name: "Export" },
        { icon: "document", name: "Reports" },
    ];

    interface MatchWithHandle {
        handle?: RouteHandle;
    }

    const matches = useMatches() as MatchWithHandle[];

    const rootMatch = matches.find((m) => m.handle?.title);
    const pageMatch = matches.find((m) => m.handle?.screenTitle);

    const title = rootMatch?.handle?.title ?? "";
    const screenTitle = pageMatch?.handle?.screenTitle ?? "";

    return (
        <div className="flex items-center h-full w-full px-8 min-w-0">

            {/* IZQUIERDA */}
            <div className="flex flex-col justify-center shrink-0">
            <span className="text-xl font-bold leading-tight">
                {title}
            </span>
                <span className="text-sm text-gray leading-tight">
                {screenTitle}
            </span>
            </div>

            {/* CENTRO */}
            <div className="flex-1 flex justify-center px-6">
                <SearchBar />
            </div>

            {/* DERECHA */}
            <div className="flex items-center gap-4 shrink-0">
                {buttons.map((button) => (
                    <ButtonsHeader key={button.icon} {...button} />
                ))}

                <div className="h-6 w-px bg-gray-600" />

                <button className="p-2 rounded-md bg-slate-700 hover:bg-slate-800 transition">
                    <CampaignRounded />
                </button>

                <button className="p-2 rounded-md bg-slate-700 hover:bg-slate-800 transition">
                    <Settings />
                </button>
            </div>

        </div>
    );
};

export default Header;
