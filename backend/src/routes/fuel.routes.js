import express from "express";

import * as controller from "../controllers/fuel.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", controller.getFuelLogs);

router.get("/:id", controller.getFuelLog);

router.post(
    "/",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.createFuelController
);

router.put(
    "/:id",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.updateFuelController
);

router.delete(
    "/:id",
    roleMiddleware("ADMIN"),
    controller.deleteFuelController
);

export default router;