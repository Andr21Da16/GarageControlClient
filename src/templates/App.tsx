import Sidebar from "../components/SideBar/Sidebar.tsx";

import {Outlet} from "react-router";



function App() {


  return (
    <>
        <header className="[grid-area:header] bg-primary">

        </header>
        <aside className="[grid-area:aside] relative bg-primary">
            <Sidebar />
        </aside>
        <main className="[grid-area:main] bg-primary">
            <Outlet/>
        </main>

    </>
  )
}

export default App
