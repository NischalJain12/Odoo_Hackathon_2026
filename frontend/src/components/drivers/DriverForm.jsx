import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const DriverForm = ({ onSubmit, initialData = {} }) => {
    const [form, setForm] = useState({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        licenseNumber: initialData.licenseNumber || "",
        licenseExpiry: initialData.licenseExpiry || "",
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
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
            />

            <Input
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
            />

            <Input
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />

            <Input
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
            />

            <Input
                label="License Number"
                name="licenseNumber"
                value={form.licenseNumber}
                onChange={handleChange}
            />

            <Input
                label="License Expiry"
                type="date"
                name="licenseExpiry"
                value={form.licenseExpiry}
                onChange={handleChange}
            />

            <Button type="submit">
                Save Driver
            </Button>
        </form>
    );
};

export default DriverForm;