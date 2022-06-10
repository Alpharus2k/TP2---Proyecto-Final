'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipesBook extends Model {
    
    static associate(models) {
     RecipesBook.hasMany(models.recipes, {
       foreignKey: 'recipeId'
     }),
     RecipesBook.hasMany(models.ingredients, {
      foreignKey: 'ingredientId'
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
    modelName: 'recipesBook',
    tableName: 'recipesBook',
  });
  return RecipesBook;
};