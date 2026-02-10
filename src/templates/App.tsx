import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function App() {
    return (
        <>
            <header className="[grid-area:header] bg-primary min-w-0">
                <Header />
            </header>

            <aside className="[grid-area:aside] bg-primary min-w-0">
                <Sidebar />
            </aside>

            <main className="[grid-area:main] bg-primary min-w-0 overflow-hidden">
                <Outlet />
            </main>
        </>
    );
}

export default App;
