import {createBrowserRouter} from "react-router";
import App from "../templates/App.tsx";
import Dashboard from "../components/pages/Dashboard.tsx";
import VehicleEntry from "../components/pages/VehicleEntry.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Dashboard/>,
            },
            {
                path: "entry",
                element: <VehicleEntry/>
            }
        ]
    },
]);