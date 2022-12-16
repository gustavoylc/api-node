const express = require('express');
const CustomerService = require('../services/customer.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
} = require('../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newCustomer = await service.create(body);
      res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const updatedCustomer = await service.update(id, body);
      res.json(updatedCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(204).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
