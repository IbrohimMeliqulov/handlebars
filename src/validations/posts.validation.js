import Joi from "joi";

export const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  user_id: Joi.string().required(),
});

export const postUpdateSchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  user_id: Joi.string(),
});
