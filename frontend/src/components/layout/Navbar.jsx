import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">
                    TransitOps Dashboard
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="font-semibold">
                        {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-sm text-gray-500">
                        {user?.role}
                    </p>
                </div>

                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Navbar;