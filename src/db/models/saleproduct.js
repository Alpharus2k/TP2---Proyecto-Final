'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class saleProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  saleProduct.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    salePrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'saleProduct',
  });
  return saleProduct;
};