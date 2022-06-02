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
     type: Sequelize.DataTypes.INTEGER,
     allowNull: false
    },
    costPerUnit: {
    type: Sequelize.DataTypes.DECIMAL(10,3),
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'IngredientsPrice',
    tableName: 'ingredientsPrice'
  });
  return ingredientsPrice;
};