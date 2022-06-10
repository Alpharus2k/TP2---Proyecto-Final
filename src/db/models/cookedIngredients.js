'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CookedIngredients extends Model {
    static associate(models) {
      CookedIngredients.hasOne(models.ingredients, {
        foreignKey: 'ingredientId',
      }),
      CookedIngredients.hasOne(models.recipes, {
        foreignKey: 'recipeId',
      })
    }
  }
  CookedIngredients.init({
    recipeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    ingredientAmount: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'cookedIngredients',
    tableName: 'cookedIngredients'
  });
  return CookedIngredients;
};