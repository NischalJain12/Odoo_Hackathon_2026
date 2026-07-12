import { Router } from 'express';
import authRoutes from './auth.routes.js';

const router = Router();

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'System operational.', timestamp: new Date().toISOString() });
});

router.use('/auth', authRoutes);

export default router;