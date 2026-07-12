import { prisma } from "../config/db.js";

export const createMaintenance = (data) => {
    return prisma.maintenance.create({
        data,
    });
};

export const getMaintenances = () => {
    return prisma.maintenance.findMany({
        include: {
            vehicle: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getMaintenance = (id) => {
    return prisma.maintenance.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            vehicle: true,
        },
    });
};

export const updateMaintenance = (id, data) => {
    return prisma.maintenance.update({
        where: {
            id: Number(id),
        },
        data,
    });
};

export const deleteMaintenance = (id) => {
    return prisma.maintenance.delete({
        where: {
            id: Number(id),
        },
    });
};