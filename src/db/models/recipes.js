'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
   
    static associate(models) {
     
    }
  }
  Recipes.init({
    name: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: Sequelize.DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Recipes',
    tableName: 'recipes',
  });
  return Recipes;
};