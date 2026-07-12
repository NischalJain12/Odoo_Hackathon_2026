import cron from "node-cron";
import { prisma } from "../config/db.js";

const licenseReminder = () => {
    cron.schedule("0 9 * * *", async () => {
        try {
            const today = new Date();

            const expiryDate = new Date();

            expiryDate.setDate(today.getDate() + 30);

            const drivers = await prisma.driver.findMany({
                where: {
                    licenseExpiry: {
                        lte: expiryDate,
                    },
                },
            });

            if (drivers.length > 0) {
                console.log(
                    `🚨 ${drivers.length} driver license(s) expiring within 30 days.`
                );
            }
        } catch (error) {
            console.error("License Reminder Error:", error);
        }
    });
};

export default licenseReminder;