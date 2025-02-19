import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold">
            <span className="ml-2 text-xl">
              REST <span className="text-orange-500">Explorer</span>
            </span>
          </NavLink>
          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/countries"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-300"
              }
            >
              Countries
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-300"
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}