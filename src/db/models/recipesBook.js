'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipesBook extends Model {
    
    static associate(models) {
     RecipesBook.hasMany(models.recipes, {
       foreignKey: 'recipeId'
     })
    }
  }
  RecipesBook.init({
    recipeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ingredientId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    perProducedUnit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'RecipesBook',
    tableName: 'recipesBook',
  });
  return RecipesBook;
};