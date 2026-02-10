import {NavLink} from "react-router";
import {Logout} from "@mui/icons-material";
import type {UserInfoProps} from "../../data/types.ts";

const UserInfo = ({user, name, rol} : UserInfoProps) =>{
    return (
        <div className="mt-auto flex h-24 w-full border-t border-bordes items-center justify-center p-4 gap-4">
            <span className="rounded-full text-tertiary p-2 bg-amber-400 border-tertiary border flex font-bold text-2xl">{user}</span>
            <div className="flex flex-col">
                <span className="font-bold">{name}</span>
                <span className="text-gray text-[14px]">{rol}</span>
            </div>
            <NavLink to="/">
                <Logout className="text-gray"/>
            </NavLink>
        </div>
    )
}
 export default UserInfo;