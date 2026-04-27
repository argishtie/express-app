import { Router } from 'express';

import controller from '../controllers/users.js';

import validation from '../middlewares/validation.js';
import schema from '../middlewares/schemas/users.schema.js';

const router = Router();

router.get('/profile', controller.profile);
router.post(
  '/login',
  validation(schema.login, 'body'),
  controller.login,
);

export default router;

