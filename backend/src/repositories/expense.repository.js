import { prisma } from "../config/db.js";

export const createExpense = (data) => {
    return prisma.expense.create({
        data,
    });
};

export const getExpenses = () => {
    return prisma.expense.findMany({
        include: {
            vehicle: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getExpense = (id) => {
    return prisma.expense.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            vehicle: true,
        },
    });
};

export const updateExpense = (id, data) => {
    return prisma.expense.update({
        where: {
            id: Number(id),
        },
        data,
    });
};

export const deleteExpense = (id) => {
    return prisma.expense.delete({
        where: {
            id: Number(id),
        },
    });
};