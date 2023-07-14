import Joi from "joi";

export const postProduct = Joi.object({
  name: Joi.string().min(3).max(64).required(),
  descrip: Joi.string().min(10).max(128).required(),
  author: Joi.string().min(3).max(64).required(),
});

export const putProduct = Joi.object({
  name: Joi.string().min(3).max(64),
  descrip: Joi.string().min(10).max(128),
  author: Joi.string().min(3).max(64),
}).min(1);
