import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { Role } from '../models/User';

export default class UserValidator {
  static async userCreateValidator(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      role: Joi.any().valid(Role.admin, Role.author).required(),
    });

    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const errorMessage = error.details
        .map((details) => {
          return details.message;
        })
        .join(', ');
      res.status(400).json({ message: errorMessage })
    } else {
      req.body = value;
      return next();
    }
  }
}
