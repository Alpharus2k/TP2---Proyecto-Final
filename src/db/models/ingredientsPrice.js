'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredientsPrice extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  IngredientsPrice.init({
    ingedientId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    costPerUnit: {
      type: Sequelize.DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'IngredientsPrice',
    tableName: 'ingredientsPrice',
  });
  return IngredientsPrice;
};