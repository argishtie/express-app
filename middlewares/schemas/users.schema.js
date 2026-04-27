import Joi from 'joi';

export default {
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(32).required(),
    test: Joi.object({
      age: Joi.number().min(0).required(),
      kuku: Joi.object({
        username: Joi.string().required(),
      }).required(),
    }).required()
  }),
}
