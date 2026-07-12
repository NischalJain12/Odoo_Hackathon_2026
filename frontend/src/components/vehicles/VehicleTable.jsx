import Table from "../common/Table";

const VehicleTable = ({ vehicles = [] }) => {
    const columns = [
        "ID",
        "Vehicle Number",
        "Type",
        "Manufacturer",
        "Model",
        "Year",
        "Capacity",
        "Fuel",
        "Status",
    ];

    const data = vehicles.map((vehicle) => ({
        ID: vehicle.id,
        "Vehicle Number": vehicle.vehicleNumber,
        Type: vehicle.vehicleType,
        Manufacturer: vehicle.manufacturer,
        Model: vehicle.model,
        Year: vehicle.year,
        Capacity: vehicle.capacity,
        Fuel: vehicle.fuelType,
        Status: vehicle.status,
    }));

    return (
        <Table
            columns={columns}
            data={data}
        />
    );
};

export default VehicleTable;