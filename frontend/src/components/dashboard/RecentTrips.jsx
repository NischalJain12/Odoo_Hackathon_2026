import Table from "../common/Table";

const RecentTrips = ({ trips = [] }) => {
    const columns = [
        "ID",
        "Source",
        "Destination",
        "Driver",
        "Vehicle",
        "Status",
    ];

    const data = trips.map((trip) => ({
        ID: trip.id,
        Source: trip.source,
        Destination: trip.destination,
        Driver:
            trip.driver?.firstName +
            " " +
            trip.driver?.lastName,
        Vehicle: trip.vehicle?.vehicleNumber,
        Status: trip.status,
    }));

    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-5">
                Recent Trips
            </h2>

            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default RecentTrips;