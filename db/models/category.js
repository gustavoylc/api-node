'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Product, {
        as: 'products',
        foreignKey: 'categoryId',
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Category',
      underscored: true,
      timestamps: true,
    }
  );
  return Category;
};
