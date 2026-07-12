import { prisma } from "../config/db.js";

export const dashboardStats = async () => {
    const [
        vehicles,
        drivers,
        trips,
        maintenance,
        fuel,
        expenses,
    ] = await Promise.all([
        prisma.vehicle.count(),
        prisma.driver.count(),
        prisma.trip.count(),
        prisma.maintenance.count(),
        prisma.fuelLog.count(),
        prisma.expense.count(),
    ]);

    return {
        vehicles,
        drivers,
        trips,
        maintenance,
        fuel,
        expenses,
    };
};