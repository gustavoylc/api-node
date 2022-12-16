'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      this.belongsTo(models.User, { as: 'user' });
      this.hasMany(models.Order, { as: 'orders', foreignKey: 'customerId' });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Customer',
      underscored: true,
      timestamps: true,
    }
  );
  return Customer;
};
