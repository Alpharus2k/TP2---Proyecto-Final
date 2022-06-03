'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    
    static associate(models) {
      Ingredients.hasOne(models.TypeMeasures, {
        foreignKey: 'typeMeasureId'
      })
    }
  }
  Ingredients.init({
    name: {
      type: Sequelize.DataTypes.STRING(100),
      unique: true,
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