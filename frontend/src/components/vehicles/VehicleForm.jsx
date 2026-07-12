import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const VehicleForm = ({ onSubmit, initialData = {} }) => {
    const [form, setForm] = useState({
        vehicleNumber: initialData.vehicleNumber || "",
        vehicleType: initialData.vehicleType || "",
        manufacturer: initialData.manufacturer || "",
        model: initialData.model || "",
        year: initialData.year || "",
        capacity: initialData.capacity || "",
        fuelType: initialData.fuelType || "",
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
            className="bg-white shadow rounded-xl p-6"
        >
            <Input
                label="Vehicle Number"
                name="vehicleNumber"
                value={form.vehicleNumber}
                onChange={handleChange}
            />

            <Input
                label="Vehicle Type"
                name="vehicleType"
                value={form.vehicleType}
                onChange={handleChange}
            />

            <Input
                label="Manufacturer"
                name="manufacturer"
                value={form.manufacturer}
                onChange={handleChange}
            />

            <Input
                label="Model"
                name="model"
                value={form.model}
                onChange={handleChange}
            />

            <Input
                label="Year"
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
            />

            <Input
                label="Capacity"
                type="number"
                name="capacity"
                value={form.capacity}
                onChange={handleChange}
            />

            <Input
                label="Fuel Type"
                name="fuelType"
                value={form.fuelType}
                onChange={handleChange}
            />

            <Button type="submit">
                Save Vehicle
            </Button>
        </form>
    );
};

export default VehicleForm;