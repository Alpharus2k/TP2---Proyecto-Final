'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodHazardsIngredients extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  FoodHazardsIngredients.init({
    ingredientId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    foodDangersId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FoodHazardsIngredients',
    tableName: 'foodHazardsIngredients',
  });
  return FoodHazardsIngredients;
};