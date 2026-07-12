import Table from "../common/Table";

const FuelTable = ({ fuels = [] }) => {
    const columns = [
        "ID",
        "Vehicle",
        "Liters",
        "Amount",
        "Date",
        "Station",
    ];

    const data = fuels.map((fuel) => ({
        ID: fuel.id,
        Vehicle: fuel.vehicle?.vehicleNumber,
        Liters: fuel.liters,
        Amount: `₹${fuel.amount}`,
        Date: new Date(fuel.date).toLocaleDateString(),
        Station: fuel.station || "-",
    }));

    return (
        <Table
            columns={columns}
            data={data}
        />
    );
};

export default FuelTable;