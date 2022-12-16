const Joi = require('joi');

const id = Joi.number().integer().required();
const email = Joi.string().email().required();
const password = Joi.string().min(8).required();
const role = Joi.string().min(5).required();
const updatedAt = Joi.date().timestamp();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const updateUserSchema = Joi.object({
  email,
  password,
  role,
  updatedAt,
});

const getUserSchema = Joi.object({
  id,
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
