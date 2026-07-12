import Table from "../common/Table";

const MaintenanceTable = ({ maintenances = [] }) => {
    const columns = [
        "ID",
        "Vehicle",
        "Service",
        "Date",
        "Cost",
        "Notes",
    ];

    const data = maintenances.map((item) => ({
        ID: item.id,
        Vehicle: item.vehicle?.vehicleNumber,
        Service: item.serviceType,
        Date: new Date(item.serviceDate).toLocaleDateString(),
        Cost: `₹${item.cost}`,
        Notes: item.notes || "-",
    }));

    return (
        <Table
            columns={columns}
            data={data}
        />
    );
};

export default MaintenanceTable;