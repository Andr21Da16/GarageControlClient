import Sidebar from "../components/sideBar/Sidebar.tsx";

import {Outlet} from "react-router";
import Header from "../components/header/Header.tsx";



function App() {


  return (
    <>
        <header className="[grid-area:header] bg-primary">
            <Header />
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
