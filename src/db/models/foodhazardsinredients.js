'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodHazardsInredients extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  FoodHazardsInredients.init({
    ingredientId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    foodDangersId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FoodHazardsInredients',
    tableName: 'foodHazardsInredients'
  });
  return FoodHazardsInredients;
};