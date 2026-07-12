import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const TripForm = ({ onSubmit, initialData = {} }) => {
    const [form, setForm] = useState({
        source: initialData.source || "",
        destination: initialData.destination || "",
        departureTime: initialData.departureTime || "",
        arrivalTime: initialData.arrivalTime || "",
        driverId: initialData.driverId || "",
        vehicleId: initialData.vehicleId || "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow p-6"
        >
            <Input
                label="Source"
                name="source"
                value={form.source}
                onChange={handleChange}
            />

            <Input
                label="Destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
            />

            <Input
                label="Departure Time"
                type="datetime-local"
                name="departureTime"
                value={form.departureTime}
                onChange={handleChange}
            />

            <Input
                label="Arrival Time"
                type="datetime-local"
                name="arrivalTime"
                value={form.arrivalTime}
                onChange={handleChange}
            />

            <Input
                label="Driver ID"
                type="number"
                name="driverId"
                value={form.driverId}
                onChange={handleChange}
            />

            <Input
                label="Vehicle ID"
                type="number"
                name="vehicleId"
                value={form.vehicleId}
                onChange={handleChange}
            />

            <Button type="submit">
                Save Trip
            </Button>
        </form>
    );
};

export default TripForm;