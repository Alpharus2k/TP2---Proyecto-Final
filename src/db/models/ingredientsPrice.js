'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredientsPrice extends Model {
   
    static associate(models) {
      ingredientsPrice.hasOne(models.ingredientsPrice, {
        foreignKey: 'ingredientId'
      })
    }
  }
  ingredientsPrice.init({
    ingredientId: {
     type: sequelize.DataTypes.INTEGER,
     allowNull: false
    },
    costPerUnit: {
    type: sequelize.DataTypes.DECIMAL(10,3),
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'IngredientsPrice',
    tableName: 'ingredientsPrice'
  });
  return ingredientsPrice;
};