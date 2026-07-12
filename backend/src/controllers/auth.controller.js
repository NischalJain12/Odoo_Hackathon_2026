import { registerUser, authenticateUser } from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ status: 'success', data: user });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { token, user } = await authenticateUser(req.body);
    res.status(200).json({ status: 'success', token, data: user });
  } catch (err) {
    next(err);
  }
};