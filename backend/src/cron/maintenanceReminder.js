import cron from "node-cron";
import { prisma } from "../config/db.js";

const maintenanceReminder = () => {
    cron.schedule("0 8 * * *", async () => {
        try {
            const today = new Date();

            const nextWeek = new Date();

            nextWeek.setDate(today.getDate() + 7);

            const schedules = await prisma.maintenance.findMany({
                where: {
                    serviceDate: {
                        lte: nextWeek,
                    },
                },
                include: {
                    vehicle: true,
                },
            });

            if (schedules.length > 0) {
                console.log(
                    `🛠 ${schedules.length} maintenance schedule(s) due this week.`
                );
            }
        } catch (error) {
            console.error("Maintenance Reminder Error:", error);
        }
    });
};

export default maintenanceReminder;