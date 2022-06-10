'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredientsPrice extends Model {
   
    static associate(models) {
      ingredientsPrice.hasOne(models.ingredients, {
        foreignKey: 'ingredientId'
      })
    }
  }
  ingredientsPrice.init({
    ingredientId: {
     type: DataTypes.INTEGER,
     allowNull: false
    },
    costPerUnit: {
    type: DataTypes.DECIMAL(10,3),
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'ingredientsPrice',
    tableName: 'ingredientsPrice'
  });
  return ingredientsPrice;
};