import { prisma } from "../config/db.js";

export const createFuelLog = (data) => {
    return prisma.fuelLog.create({
        data,
    });
};

export const getFuelLogs = () => {
    return prisma.fuelLog.findMany({
        include: {
            vehicle: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getFuelLog = (id) => {
    return prisma.fuelLog.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            vehicle: true,
        },
    });
};

export const updateFuelLog = (id, data) => {
    return prisma.fuelLog.update({
        where: {
            id: Number(id),
        },
        data,
    });
};

export const deleteFuelLog = (id) => {
    return prisma.fuelLog.delete({
        where: {
            id: Number(id),
        },
    });
};