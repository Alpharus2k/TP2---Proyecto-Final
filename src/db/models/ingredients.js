'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Ingredients.init({
    name: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false
    },
    typeMeasuresId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ingredients',
    tableName: 'ingredients',
  });
  return Ingredients;
};