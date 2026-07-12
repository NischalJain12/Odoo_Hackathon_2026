import Table from "../common/Table";

const TripTable = ({ trips = [] }) => {
    const columns = [
        "ID",
        "Source",
        "Destination",
        "Driver",
        "Vehicle",
        "Departure",
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
        Departure: new Date(
            trip.departureTime
        ).toLocaleString(),
        Status: trip.status,
    }));

    return (
        <Table
            columns={columns}
            data={data}
        />
    );
};

export default TripTable;