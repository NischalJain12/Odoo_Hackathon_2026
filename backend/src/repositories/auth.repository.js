import { prisma } from "../config/db.js";

export const createUser = (data) => {
    return prisma.user.create({ data });
};

export const findUserByEmail = (email) => {
    return prisma.user.findUnique({
        where: { email },
    });
};

export const findUserById = (id) => {
    return prisma.user.findUnique({
        where: { id },
    });
};

export const getUsers = () => {
    return prisma.user.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};