import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const ExpenseForm = ({ onSubmit, initialData = {} }) => {
    const [form, setForm] = useState({
        vehicleId: initialData.vehicleId || "",
        category: initialData.category || "",
        description: initialData.description || "",
        amount: initialData.amount || "",
        expenseDate: initialData.expenseDate || "",
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
                label="Vehicle ID"
                type="number"
                name="vehicleId"
                value={form.vehicleId}
                onChange={handleChange}
            />

            <Input
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
            />

            <Input
                label="Description"
                name="description"
                value={form.description}
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
                label="Expense Date"
                type="date"
                name="expenseDate"
                value={form.expenseDate}
                onChange={handleChange}
            />

            <Button type="submit">
                Save Expense
            </Button>
        </form>
    );
};

export default ExpenseForm;