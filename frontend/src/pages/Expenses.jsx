import { useEffect, useState } from "react";

import { getExpenses } from "../services/expense.service";

import ExpenseTable from "../components/expenses/ExpenseTable";

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        loadExpenses();
    }, []);

    const loadExpenses = async () => {
        try {
            const { data } = await getExpenses();
            setExpenses(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Expenses
            </h1>

            <ExpenseTable expenses={expenses} />
        </div>
    );
};

export default Expenses;