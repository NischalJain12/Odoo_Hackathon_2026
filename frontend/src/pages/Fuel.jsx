import { useEffect, useState } from "react";

import { getFuelLogs } from "../services/fuel.service";

import FuelTable from "../components/fuel/FuelTable";

const Fuel = () => {
    const [fuelLogs, setFuelLogs] = useState([]);

    useEffect(() => {
        loadFuelLogs();
    }, []);

    const loadFuelLogs = async () => {
        try {
            const { data } = await getFuelLogs();
            setFuelLogs(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Fuel Logs
            </h1>

            <FuelTable fuels={fuelLogs} />
        </div>
    );
};

export default Fuel;