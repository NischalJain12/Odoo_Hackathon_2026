import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-8xl font-bold text-red-500">
                404
            </h1>

            <p className="text-2xl mt-4">
                Page Not Found
            </p>

            <Link
                to="/dashboard"
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
                Back to Dashboard
            </Link>
        </div>
    );
};

export default NotFound;