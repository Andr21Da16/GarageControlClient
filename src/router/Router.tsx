import {createBrowserRouter} from "react-router";
import App from "../templates/App.tsx";
import Dashboard from "../components/pages/Dashboard.tsx";
import VehicleEntry from "../components/pages/VehicleEntry.tsx";
import Error404 from "../components/pages/Error404.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    handle: {
      title: "Parking Management",
    },
    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: {
          screenTitle: "Dashboard",
        },
      },
      {
        path: "entry",
        element: <VehicleEntry />,
        handle: {
          screenTitle: "Vehicle Entry",
        },
      },
    ],
  },
]);
