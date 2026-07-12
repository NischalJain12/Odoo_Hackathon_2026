import { useEffect, useState } from "react";

import { getMaintenances } from "../services/maintenance.service";

import MaintenanceTable from "../components/maintenance/MaintenanceTable";

const Maintenance = () => {
    const [maintenances, setMaintenances] = useState([]);

    useEffect(() => {
        loadMaintenance();
    }, []);

    const loadMaintenance = async () => {
        try {
            const { data } = await getMaintenances();
            setMaintenances(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Maintenance
            </h1>

            <MaintenanceTable maintenances={maintenances} />
        </div>
    );
};

export default Maintenance;