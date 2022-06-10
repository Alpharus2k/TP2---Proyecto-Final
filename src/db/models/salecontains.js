'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleContains extends Model {
 
    static associate(models) {
    }
  }
  SaleContains.init({
    saleProductId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'saleContains',
  });
  return SaleContains;
};