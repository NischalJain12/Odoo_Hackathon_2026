import express from "express";

import * as controller from "../controllers/expense.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", controller.getExpenses);

router.get("/:id", controller.getExpense);

router.post(
    "/",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.createExpenseController
);

router.put(
    "/:id",
    roleMiddleware("ADMIN", "MANAGER"),
    controller.updateExpenseController
);

router.delete(
    "/:id",
    roleMiddleware("ADMIN"),
    controller.deleteExpenseController
);

export default router;