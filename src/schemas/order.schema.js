const Joi = require('joi');

const id = Joi.number().integer().required();
const delivered = Joi.boolean();
const updatedAt = Joi.date().timestamp();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
  delivered: delivered.required(),
  customerId: customerId.required(),
});

const getOrderSchema = Joi.object({
  id,
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});

module.exports = {
  createOrderSchema,
  addItemSchema,
  getOrderSchema,
};