import express from "express";

import * as controller from "../controllers/driver.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", controller.getDrivers);

router.get("/:id", controller.getDriver);

router.post(
    "/",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.createDriverController
);

router.put(
    "/:id",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.updateDriverController
);

router.delete(
    "/:id",
    roleMiddleware("ADMIN"),
    controller.deleteDriverController
);

export default router;