import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as repository from "../repositories/auth.repository.js";

export const register = async (data) => {
    const existingUser = await repository.findUserByEmail(data.email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await repository.createUser({
        ...data,
        password: hashedPassword,
    });

    return user;
};

export const login = async (email, password) => {
    const user = await repository.findUserByEmail(email);

    if (!user) {
        throw new Error("Invalid Credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid Credentials");
    }

    const token = jwt.sign(
        {
            id: user.id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN,
        }
    );

    return {
        user,
        token,
    };
};