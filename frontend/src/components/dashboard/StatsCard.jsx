const StatsCard = ({
    title,
    value,
    color = "bg-blue-600",
}) => {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <div
                className={`w-12 h-12 rounded-lg ${color} mb-4`}
            ></div>

            <h3 className="text-gray-500 text-sm">
                {title}
            </h3>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>
        </div>
    );
};

export default StatsCard;