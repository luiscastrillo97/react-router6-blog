import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [navBar, setNavBan] = useState(false);
    const handleOnClick = () => {
        setNavBan(!navBar);
    };

    const handleWindowResize = (event) => {
        if (event?.target?.innerWidth >= 640) {
            setNavBan(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <header className="w-full border-b border-gray-400 bg-gray-300 px-4">
                <div className="mx-auto flex max-w-screen-md flex-wrap items-center justify-between gap-2">
                    <Link to="/" className="flex h-16 items-center text-2xl">
                        <img
                            src="src/assets/react-router-icon.png"
                            alt=""
                            className="mr-3 h-8"
                        />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold">
                            Router Practice
                        </span>
                    </Link>

                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={handleOnClick}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <nav
                        className={`w-full items-center justify-between sm:flex sm:w-auto ${
                            navBar ? "" : "hidden"
                        }`}
                        id="navbar-default"
                    >
                        <div className="my-4 flex flex-col space-y-2 rounded-lg border-2 border-gray-100 p-2 sm:my-0 sm:flex-row sm:gap-3 sm:space-y-0 sm:border-0 sm:p-0">
                            <NavBarItem title="Inicio" path="/"></NavBarItem>
                            <NavBarItem
                                title="Contacto"
                                path="/contacto"
                            ></NavBarItem>
                            <NavBarItem title="Blog" path="/blog"></NavBarItem>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;
