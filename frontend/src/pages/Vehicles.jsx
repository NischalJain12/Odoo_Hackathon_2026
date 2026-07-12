import { useEffect, useState } from "react";

import { getVehicles } from "../services/vehicle.service";

import VehicleTable from "../components/vehicles/VehicleTable";

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        try {
            const { data } = await getVehicles();

            setVehicles(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Vehicles
            </h1>

            <VehicleTable vehicles={vehicles} />
        </div>
    );
};

export default Vehicles;