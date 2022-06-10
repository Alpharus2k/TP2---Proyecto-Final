'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodHazardsIngredients extends Model {
    
    static associate(models) {
      FoodHazardsIngredients.hasMany(models.ingredients, {
        foreignKey: 'ingredientId'
      }),
      FoodHazardsIngredients.hasMany(models.foodDangers, {
        foreignKey: 'foodDangersId'
      })
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
    modelName: 'foodHazardsIngredients',
    tableName: 'foodHazardsIngredients',
  });
  return FoodHazardsIngredients;
};