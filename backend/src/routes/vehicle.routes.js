import express from "express";

import * as controller from "../controllers/vehicle.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", controller.getVehicles);

router.get("/:id", controller.getVehicle);

router.post(
    "/",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.createVehicleController
);

router.put(
    "/:id",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.updateVehicleController
);

router.delete(
    "/:id",
    roleMiddleware("ADMIN"),
    controller.deleteVehicleController
);

export default router;