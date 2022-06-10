'use strict';
const {Model} = require('sequelize');
const people = require('./people');
module.exports = (sequelize, DataTypes) => {
  class Phones extends Model {
    
    static associate(models) {
      Phones.hasOne(models.people, {
        foreignKey: 'peopleId'
      })
    }
  }
  Phones.init({
    peopleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    countryCode: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    areaCode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'phones',
    tableName: 'phones',
  });
  return Phones;
};