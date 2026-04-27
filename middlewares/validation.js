import _ from 'lodash';
import HttpErrors from 'http-errors';

const validator = (schema, path = 'body') => (req, res, next) => {
  try {
    const v = schema.validate(req[path], { abortEarly: false });

    let x = {
      "value": {
        "email": {},
        "test": {
          "kuku": {}
        }
      },
      "error": {
        "_original": {
          "email": {},
          "test": {
            "kuku": {}
          }
        },
        "details": [
          {
            "message": "\"email\" must be a string",
            "path": [
              "email"
            ],
            "type": "string.base",
            "context": {
              "label": "email",
              "value": {},
              "key": "email"
            }
          },
          {
            "message": "\"password\" is required",
            "path": [
              "password"
            ],
            "type": "any.required",
            "context": {
              "label": "password",
              "key": "password"
            }
          },
          {
            "message": "\"test.age\" is required",
            "path": [
              "test",
              "age"
            ],
            "type": "any.required",
            "context": {
              "label": "test.age",
              "key": "age"
            }
          },
          {
            "message": "\"test.kuku.username\" is required",
            "path": [
              "test",
              "kuku",
              "username"
            ],
            "type": "any.required",
            "context": {
              "label": "test.kuku.username",
              "key": "username"
            }
          }
        ]
      }
    }

    if (v.error) {
      const errors = {};

      v.error.details.forEach((d) => {
        const errorMessage = d.message.replace(/".*"/, '').trim();
        _.set(errors, d.path, errorMessage);
      });

      throw new HttpErrors(422, {
        message: 'Validation error',
        errors,
      });
    }

    next();
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export default validator;
