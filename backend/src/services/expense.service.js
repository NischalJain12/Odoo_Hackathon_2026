import * as repository from "../repositories/expense.repository.js";

export const createExpense = (data) => {
    return repository.createExpense(data);
};

export const getExpenses = () => {
    return repository.getExpenses();
};

export const getExpense = (id) => {
    return repository.getExpense(id);
};

export const updateExpense = (id, data) => {
    return repository.updateExpense(id, data);
};

export const deleteExpense = (id) => {
    return repository.deleteExpense(id);
};