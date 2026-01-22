import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().min(4).max(20).required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const userUpdateSchema = Joi.object({
  name: Joi.string().min(4).max(20),
  age: Joi.number(),
  email: Joi.string().email(),
  password: Joi.string(),
});
