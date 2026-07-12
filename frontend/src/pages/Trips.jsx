import { useEffect, useState } from "react";

import { getTrips } from "../services/trip.service";

import TripTable from "../components/trips/TripTable";

const Trips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        loadTrips();
    }, []);

    const loadTrips = async () => {
        try {
            const { data } = await getTrips();
            setTrips(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Trips
            </h1>

            <TripTable trips={trips} />
        </div>
    );
};

export default Trips;