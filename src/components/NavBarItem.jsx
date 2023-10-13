import { NavLink } from "react-router-dom";

const NavBarItem = ({ title, path }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive
                    ? "block rounded-md bg-gray-400 p-2 text-lg font-semibold text-white hover:bg-gray-500"
                    : "block rounded-md p-2 text-lg font-semibold hover:bg-gray-500"
            }
            to={path}
        >
            {title}
        </NavLink>
    );
};

export default NavBarItem;
