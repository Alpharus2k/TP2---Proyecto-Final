'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class saleProduct extends Model {
   
    static associate(models) {
     
    }
  }
  saleProduct.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    salePrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'saleProducts',
    tableName: 'saleProducts'
  });
  return saleProduct;
};