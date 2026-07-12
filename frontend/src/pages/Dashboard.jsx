import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboard.service";

import StatsCard from "../components/dashboard/StatsCard";

const Dashboard = () => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const { data } = await getDashboard();

            setStats(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-3 gap-6">
                <StatsCard
                    title="Vehicles"
                    value={stats.vehicles || 0}
                />

                <StatsCard
                    title="Drivers"
                    value={stats.drivers || 0}
                />

                <StatsCard
                    title="Trips"
                    value={stats.trips || 0}
                />

                <StatsCard
                    title="Maintenance"
                    value={stats.maintenance || 0}
                />

                <StatsCard
                    title="Fuel Logs"
                    value={stats.fuel || 0}
                />

                <StatsCard
                    title="Expenses"
                    value={stats.expenses || 0}
                />
            </div>
        </div>
    );
};

export default Dashboard;