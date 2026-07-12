import { prisma } from "../config/db.js";

export const createTrip = (data) => {
    return prisma.trip.create({
        data,
        include: {
            driver: true,
            vehicle: true,
        },
    });
};

export const getTrips = () => {
    return prisma.trip.findMany({
        include: {
            driver: true,
            vehicle: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getTrip = (id) => {
    return prisma.trip.findUnique({
        where: { id: Number(id) },
        include: {
            driver: true,
            vehicle: true,
        },
    });
};

export const updateTrip = (id, data) => {
    return prisma.trip.update({
        where: { id: Number(id) },
        data,
    });
};

export const deleteTrip = (id) => {
    return prisma.trip.delete({
        where: { id: Number(id) },
    });
};