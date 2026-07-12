import * as service from "../services/expense.service.js";

export const createExpenseController = async (req, res, next) => {
    try {
        const expense = await service.createExpense(req.body);

        res.status(201).json({
            success: true,
            data: expense,
        });
    } catch (error) {
        next(error);
    }
};

export const getExpenses = async (req, res, next) => {
    try {
        const expenses = await service.getExpenses();

        res.status(200).json({
            success: true,
            data: expenses,
        });
    } catch (error) {
        next(error);
    }
};

export const getExpense = async (req, res, next) => {
    try {
        const expense = await service.getExpense(req.params.id);

        res.status(200).json({
            success: true,
            data: expense,
        });
    } catch (error) {
        next(error);
    }
};

export const updateExpenseController = async (req, res, next) => {
    try {
        const expense = await service.updateExpense(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: expense,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteExpenseController = async (req, res, next) => {
    try {
        await service.deleteExpense(req.params.id);

        res.status(200).json({
            success: true,
            message: "Expense Deleted Successfully",
        });
    } catch (error) {
        next(error);
    }
};