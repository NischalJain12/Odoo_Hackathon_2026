import express from "express";

import * as controller from "../controllers/trip.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", controller.getTrips);

router.get("/:id", controller.getTrip);

router.post(
    "/",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.createTripController
);

router.put(
    "/:id",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.updateTripController
);

router.delete(
    "/:id",
    roleMiddleware("ADMIN"),
    controller.deleteTripController
);

export default router;