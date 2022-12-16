const Joi = require('joi');

const id = Joi.number().integer().required();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const updatedAt = Joi.date().timestamp();

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required(),
});

const updateCategorySchema = Joi.object({
  name,
  image,
  updatedAt,
});

const getCategorySchema = Joi.object({
  id,
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
