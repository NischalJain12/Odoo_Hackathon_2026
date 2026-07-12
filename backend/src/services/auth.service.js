import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, insertUser } from '../repositories/user.repository.js';
import AppError from '../utils/AppError.js';

export const registerUser = async ({ name, email, password, role }) => {
  const existing = await findUserByEmail(email);
  if (existing) throw new AppError('Email already registered', 400);

  const hashedPassword = await bcrypt.hash(password, 10);
  return insertUser({ name, email, hashedPassword, role });
};

export const authenticateUser = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );

  return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
};