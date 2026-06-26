import { Router } from 'express';

import controller from '../controllers/chat.js';

// import validation from '../middlewares/validation.js';
// import schema from '../middlewares/schemas/users.schema.js';
import authorization from "../middlewares/authorization.js";

const router = Router();

router.post(
  '/send/message',
  authorization,
  // validation(schema.sendMessage, 'body'),
  controller.sendMessage,
);

router.post(
  '/users/list',
  authorization,
  // validation(schema.sendMessage, 'body'),
  controller.getUsersList,
);

router.post(
  '/messages/:fromId',
  authorization,
  // validation(schema.sendMessage, 'body'),
  controller.getMessages,
);


export default router;

