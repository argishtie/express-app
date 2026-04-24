import { Router } from 'express';

import controller from '../controllers/users.js';

const router = Router();

router.get('/profile', controller.profile);
router.post('/login', controller.login);

export default router;

