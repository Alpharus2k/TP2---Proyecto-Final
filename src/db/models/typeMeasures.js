'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeMeasures extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  TypeMeasures.init({
    name:{
      type: DataTypes.STRING(20),
      allowNull: false
       },
      description:{
      type: DataTypes.STRING(2),
      unique: true,
      allowNull: true
       }
  }, {
    sequelize,
    modelName: 'TypeMeasures',
    tableName: 'typeMeasures'
  });
  return TypeMeasures;
};