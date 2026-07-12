import dotenv from "dotenv";
import licenseReminder from "./cron/licenseReminder.js";
import maintenanceReminder from "./cron/maintenanceReminder.js";
import reportScheduler from "./cron/reportScheduler.js";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await connectDB();

    licenseReminder();

maintenanceReminder();

reportScheduler();

    app.listen(PORT, () => {
        console.log(`
========================================
🚀 TransitOps Backend Started
🌍 Environment : ${process.env.NODE_ENV || "development"}
📡 Server      : http://localhost:${PORT}
========================================
`);
    });
};

startServer();