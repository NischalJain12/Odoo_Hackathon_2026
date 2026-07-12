import Table from "../common/Table";

const DriverTable = ({ drivers = [] }) => {
    const columns = [
        "ID",
        "Name",
        "Email",
        "Phone",
        "License",
        "Expiry",
        "Status",
    ];

    const data = drivers.map((driver) => ({
        ID: driver.id,
        Name: `${driver.firstName} ${driver.lastName}`,
        Email: driver.email,
        Phone: driver.phone,
        License: driver.licenseNumber,
        Expiry: new Date(driver.licenseExpiry).toLocaleDateString(),
        Status: driver.status,
    }));

    return (
        <Table
            columns={columns}
            data={data}
        />
    );
};

export default DriverTable;