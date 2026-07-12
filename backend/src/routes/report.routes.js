import express from "express";

import {
    vehicleReportController,
    driverReportController,
    tripReportController,
    expenseReportController,
    fuelReportController,
    maintenanceReportController,
} from "../controllers/report.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/vehicles", vehicleReportController);

router.get("/drivers", driverReportController);

router.get("/trips", tripReportController);

router.get("/expenses", expenseReportController);

router.get("/fuel", fuelReportController);

router.get("/maintenance", maintenanceReportController);

export default router;