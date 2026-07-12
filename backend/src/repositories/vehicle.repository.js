import { prisma } from "../config/db.js";

export const createVehicle = (data) => {
    return prisma.vehicle.create({
        data,
    });
};

export const getVehicles = () => {
    return prisma.vehicle.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getVehicle = (id) => {
    return prisma.vehicle.findUnique({
        where: { id: Number(id) },
    });
};

export const updateVehicle = (id, data) => {
    return prisma.vehicle.update({
        where: { id: Number(id) },
        data,
    });
};

export const deleteVehicle = (id) => {
    return prisma.vehicle.delete({
        where: { id: Number(id) },
    });
};