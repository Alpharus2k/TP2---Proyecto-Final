'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredientsPrice extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  ingredientsPrice.init({
    ingredientId: {
     type: DataTypes.INTEGER,
     allowNull: false
    },
    costPerUnit: {
    type: DataTypes.DECIMAL(10,3),
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'IngredientsPrice',
    tableName: 'ingredientsPrice'
  });
  return ingredientsPrice;
};