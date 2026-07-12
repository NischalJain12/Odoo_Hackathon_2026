import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const MaintenanceForm = ({ onSubmit, initialData = {} }) => {
    const [form, setForm] = useState({
        vehicleId: initialData.vehicleId || "",
        serviceType: initialData.serviceType || "",
        serviceDate: initialData.serviceDate || "",
        cost: initialData.cost || "",
        notes: initialData.notes || "",
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
                label="Service Type"
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
            />

            <Input
                label="Service Date"
                type="date"
                name="serviceDate"
                value={form.serviceDate}
                onChange={handleChange}
            />

            <Input
                label="Cost"
                type="number"
                name="cost"
                value={form.cost}
                onChange={handleChange}
            />

            <Input
                label="Notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
            />

            <Button type="submit">
                Save Maintenance
            </Button>
        </form>
    );
};

export default MaintenanceForm;