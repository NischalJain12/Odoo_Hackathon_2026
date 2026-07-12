import Table from "../common/Table";

const ExpenseTable = ({ expenses = [] }) => {
    const columns = [
        "ID",
        "Vehicle",
        "Category",
        "Description",
        "Amount",
        "Expense Date",
    ];

    const data = expenses.map((expense) => ({
        ID: expense.id,
        Vehicle: expense.vehicle?.vehicleNumber,
        Category: expense.category,
        Description: expense.description || "-",
        Amount: `₹${expense.amount}`,
        "Expense Date": new Date(
            expense.expenseDate
        ).toLocaleDateString(),
    }));

    return (
        <Table
            columns={columns}
            data={data}
        />
    );
};

export default ExpenseTable;