import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const FuelForm = ({ onSubmit, initialData = {} }) => {
    const [form, setForm] = useState({
        vehicleId: initialData.vehicleId || "",
        liters: initialData.liters || "",
        amount: initialData.amount || "",
        date: initialData.date || "",
        station: initialData.station || "",
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
                label="Vehicle ID"
                type="number"
                name="vehicleId"
                value={form.vehicleId}
                onChange={handleChange}
            />

            <Input
                label="Liters"
                type="number"
                name="liters"
                value={form.liters}
                onChange={handleChange}
            />

            <Input
                label="Amount"
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
            />

            <Input
                label="Date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
            />

            <Input
                label="Fuel Station"
                name="station"
                value={form.station}
                onChange={handleChange}
            />

            <Button type="submit">
                Save Fuel Log
            </Button>
        </form>
    );
};

export default FuelForm;