import { prisma } from "../config/db.js";

export const vehicleReport = () => {
    return prisma.vehicle.findMany({
        include: {
            trips: true,
            maintenance: true,
            fuelLogs: true,
            expenses: true,
        },
    });
};

export const driverReport = () => {
    return prisma.driver.findMany({
        include: {
            trips: true,
        },
    });
};

export const tripReport = () => {
    return prisma.trip.findMany({
        include: {
            driver: true,
            vehicle: true,
        },
    });
};

export const expenseReport = () => {
    return prisma.expense.findMany({
        include: {
            vehicle: true,
        },
    });
};

export const fuelReport = () => {
    return prisma.fuelLog.findMany({
        include: {
            vehicle: true,
        },
    });
};

export const maintenanceReport = () => {
    return prisma.maintenance.findMany({
        include: {
            vehicle: true,
        },
    });
};