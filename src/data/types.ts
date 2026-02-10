import type {IconName} from "../utils/IconMapper.ts";

export type SidebarItem = {
    name: string;
    icon: IconName;
    path: string;
};

export interface UserInfoProps {
    user: string,
    name: string,
    rol: string,
}