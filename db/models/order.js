'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.Customer, { as: 'customer' });
      this.belongsToMany(models.Product, {
        as: 'items',
        through: models.OrderProduct,
        foreignKey: 'orderId',
        otherKey: 'productId',
      });
    }
  }
  Order.init(
    {
      delivered: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Order',
      underscored: true,
      timestamps: true,
    }
  );
  return Order;
};
