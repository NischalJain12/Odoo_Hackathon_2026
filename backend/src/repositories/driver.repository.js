import { prisma } from "../config/db.js";

export const createDriver = (data) => {
    return prisma.driver.create({
        data,
    });
};

export const getDrivers = () => {
    return prisma.driver.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getDriver = (id) => {
    return prisma.driver.findUnique({
        where: { id: Number(id) },
    });
};

export const updateDriver = (id, data) => {
    return prisma.driver.update({
        where: { id: Number(id) },
        data,
    });
};

export const deleteDriver = (id) => {
    return prisma.driver.delete({
        where: { id: Number(id) },
    });
};