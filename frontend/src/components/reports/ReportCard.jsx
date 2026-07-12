const ReportCard = ({
    title,
    value,
    color = "bg-blue-600",
}) => {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-gray-500 text-sm">
                        {title}
                    </h3>

                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                    </h2>
                </div>

                <div
                    className={`w-14 h-14 rounded-full ${color}`}
                ></div>
            </div>
        </div>
    );
};

export default ReportCard;