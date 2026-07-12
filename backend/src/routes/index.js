import express from "express";

import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import vehicleRoutes from "./vehicle.routes.js";
import driverRoutes from "./driver.routes.js";
import tripRoutes from "./trip.routes.js";
import maintenanceRoutes from "./maintenance.routes.js";
import fuelRoutes from "./fuel.routes.js";
import expenseRoutes from "./expense.routes.js";
import reportRoutes from "./report.routes.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        project: "TransitOps",
        version: "v1",
        message: "API is working successfully.",
    });
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

router.use("/auth", authRoutes);

router.use("/dashboard", dashboardRoutes);

router.use("/vehicles", vehicleRoutes);

router.use("/drivers", driverRoutes);

router.use("/trips", tripRoutes);

router.use("/maintenance", maintenanceRoutes);

router.use("/fuel", fuelRoutes);

router.use("/expenses", expenseRoutes);

router.use("/reports", reportRoutes);

export default router;