import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
// import NewNavBar from "../components/NewNavBar";

const LayoutPublic = () => {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <NavBar />
            {/* <NewNavBar></NewNavBar> */}
            <main className="flex justify-center p-4 pb-20">
                <Outlet />
            </main>
            <footer className="absolute bottom-0 flex h-20 w-full items-center justify-center border-t border-gray-500 bg-gray-400">
                <span className="text-xl font-semibold">
                    Página desarrollada por Luis Castrilo
                </span>
            </footer>
        </div>
    );
};

export default LayoutPublic;
