'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
   
    static associate(models) {
     Recipes.belongsToMany(models.ingredients, {
      through: 'recipesBook'
     })
    }
  } 

  Recipes.init({
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'recipes',
    tableName: 'recipes',
  });
  return Recipes;
};