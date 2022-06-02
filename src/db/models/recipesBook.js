'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipesBook extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  RecipesBook.init({
    recipeId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ingredientId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    perProducedUnit: {
      type: Sequelize.DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'RecipesBook',
    tableName: 'recipesBook',
  });
  return RecipesBook;
};