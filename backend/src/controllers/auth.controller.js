import { validationResult } from "express-validator";

import * as service from "../services/auth.service.js";

export const registerController = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }

        const user = await service.register(req.body);

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const result = await service.login(email, password);

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};