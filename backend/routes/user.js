import { Router } from 'express';
import register from '../controllers/user/register.js';
import login from '../controllers/user/login.js';
import userData from '../controllers/user/userData.js';
import protect from '../middlewares/auth/authMiddleware.js';

const router = new Router();

router.post('/register', register)
router.post('/login', login)
router.get('/userData', protect, userData)

export default router;