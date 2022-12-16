const Joi = require('joi');

const id = Joi.number().integer().required();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const phone = Joi.string()
  .regex(/^[0-9]{10}$/)
  .messages({ 'string.pattern.base': `Phone number must have 10 digits.` });
const updatedAt = Joi.date().timestamp();
const userId = Joi.number().integer();
const email = Joi.string().email().required();
const password = Joi.string().required();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone,
  user: Joi.object({
    email,
    password,
  }),
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  updatedAt,
  userId,
});

const getCustomerSchema = Joi.object({
  id,
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
