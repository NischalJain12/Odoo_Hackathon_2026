import { useEffect, useState } from "react";

import {
    getVehicleReport,
    getDriverReport,
    getTripReport,
} from "../services/report.service";

import ReportCard from "../components/reports/ReportCard";
import ReportTable from "../components/reports/ReportTable";

const Reports = () => {
    const [vehicleReport, setVehicleReport] = useState([]);
    const [driverReport, setDriverReport] = useState([]);
    const [tripReport, setTripReport] = useState([]);

    useEffect(() => {
        loadReports();
    }, []);

    const loadReports = async () => {
        try {
            const vehicles = await getVehicleReport();
            const drivers = await getDriverReport();
            const trips = await getTripReport();

            setVehicleReport(vehicles.data.data);
            setDriverReport(drivers.data.data);
            setTripReport(trips.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">
                Reports
            </h1>

            <div className="grid grid-cols-3 gap-6 mb-8">
                <ReportCard
                    title="Vehicles"
                    value={vehicleReport.length}
                    color="bg-blue-500"
                />

                <ReportCard
                    title="Drivers"
                    value={driverReport.length}
                    color="bg-green-500"
                />

                <ReportCard
                    title="Trips"
                    value={tripReport.length}
                    color="bg-orange-500"
                />
            </div>

            <ReportTable
                columns={[
                    "ID",
                    "Source",
                    "Destination",
                    "Status",
                ]}
                data={tripReport.map((trip) => ({
                    ID: trip.id,
                    Source: trip.source,
                    Destination: trip.destination,
                    Status: trip.status,
                }))}
            />
        </div>
    );
};

export default Reports;