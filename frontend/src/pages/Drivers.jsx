import { useEffect, useState } from "react";

import { getDrivers } from "../services/driver.service";

import DriverTable from "../components/drivers/DriverTable";

const Drivers = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        loadDrivers();
    }, []);

    const loadDrivers = async () => {
        try {
            const { data } = await getDrivers();
            setDrivers(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Drivers
            </h1>

            <DriverTable drivers={drivers} />
        </div>
    );
};

export default Drivers;