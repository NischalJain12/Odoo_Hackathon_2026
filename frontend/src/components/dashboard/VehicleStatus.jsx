const VehicleStatus = ({
    vehicles = [],
}) => {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-5">
                Vehicle Status
            </h2>

            <div className="space-y-3">
                {vehicles.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        className="flex justify-between border-b pb-2"
                    >
                        <span>
                            {vehicle.vehicleNumber}
                        </span>

                        <span
                            className={`font-semibold ${
                                vehicle.status ===
                                "AVAILABLE"
                                    ? "text-green-600"
                                    : vehicle.status ===
                                      "ON_TRIP"
                                    ? "text-blue-600"
                                    : "text-red-600"
                            }`}
                        >
                            {vehicle.status}
                        </span>
                    </div>
                ))}

                {vehicles.length === 0 && (
                    <p>No Vehicles Found</p>
                )}
            </div>
        </div>
    );
};

export default VehicleStatus;