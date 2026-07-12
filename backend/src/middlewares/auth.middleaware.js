import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return next(new AppError('You are not logged in.', 401));
  }
  try {
    const token = authHeader.split(' ')[1];
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    next(new AppError('Invalid or expired token.', 401));
  }
};