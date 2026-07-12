import express from "express";

import * as controller from "../controllers/maintenance.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", controller.getMaintenances);

router.get("/:id", controller.getMaintenance);

router.post(
    "/",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.createMaintenanceController
);

router.put(
    "/:id",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.updateMaintenanceController
);

router.delete(
    "/:id",
    roleMiddleware("ADMIN"),
    controller.deleteMaintenanceController
);

export default router;