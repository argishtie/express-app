import { Router } from 'express';
import upload from '../middlewares/upload.js';

import controller from '../controllers/users.js';

import validation from '../middlewares/validation.js';
import schema from '../middlewares/schemas/users.schema.js';
import authorization from "../middlewares/authorization.js";

const router = Router();

router.post('/avater', upload.single('file'), function (req, res, next) {
  try {
    console.log(req.file)
    console.log(req.body)
    res.json({
      status: 'ok',
    })
  } catch (e) {
    next(e);
  }
});

router.post(
  '/login',
  validation(schema.login, 'body'),
  controller.login,
);

router.post(
  '/register',
  validation(schema.register, 'body'),
  controller.register,
);

router.get(
  '/activate/:activationToken',
  controller.activateAccount,
);

router.get(
  '/profile',
  authorization,
  controller.profile,
);

router.put(
  '/profile',
  authorization,
  validation(schema.update, 'body'),
  controller.update,
);

router.get(
  '/list',
  authorization,
  validation(schema.getUsersList, 'query'),
  controller.getUsersList,
);

// views
router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

export default router;

