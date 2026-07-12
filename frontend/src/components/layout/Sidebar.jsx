import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const menu = [
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        {
            name: "Vehicles",
            path: "/vehicles",
        },
        {
            name: "Drivers",
            path: "/drivers",
        },
        {
            name: "Trips",
            path: "/trips",
        },
        {
            name: "Maintenance",
            path: "/maintenance",
        },
        {
            name: "Fuel",
            path: "/fuel",
        },
        {
            name: "Expenses",
            path: "/expenses",
        },
        {
            name: "Reports",
            path: "/reports",
        },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen">
            <div className="p-6 text-3xl font-bold border-b border-slate-700">
                TransitOps
            </div>

            <nav className="mt-6">
                {menu.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `block px-6 py-3 transition ${
                                isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;