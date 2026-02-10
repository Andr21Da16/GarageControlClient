import DashboardIcon from "@mui/icons-material/Dashboard";
import InputIcon from "@mui/icons-material/Input";
import CheckOutIcon from "@mui/icons-material/CheckOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import PaymentIcon from "@mui/icons-material/Payment";
import MapIcon from "@mui/icons-material/Map";
import FireTruckIcon from "@mui/icons-material/FireTruck";


export type IconName =
    | "dashboard"
    | "input"
    | "checkout"
    | "business"
    | "payments"
    | "map"
    | "truck";

export const iconMapper: Record<IconName, React.ElementType> = {
    dashboard: DashboardIcon,
    input: InputIcon,
    checkout: CheckOutIcon,
    business: BusinessIcon,
    payments: PaymentIcon,
    map: MapIcon,
    truck: FireTruckIcon,
};

