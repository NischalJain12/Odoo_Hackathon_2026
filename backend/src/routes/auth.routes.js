import express from "express";

import {
    registerController,
    loginController,
} from "../controllers/auth.controller.js";

import {
    registerValidation,
    loginValidation,
} from "../validations/auth.validation.js";

const router = express.Router();

router.post("/register", registerValidation, registerController);

router.post("/login", loginValidation, loginController);

export default router;