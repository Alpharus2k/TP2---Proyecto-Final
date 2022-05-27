'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phones extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Phones.init({
    peopleId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    countryCode: {
      type: Sequelize.DataTypes.STRING(4),
      allowNull: false
    },
    areaCode: {
      type: Sequelize.DataTypes.STRING(5),
      allowNull: false
    },
    number: {
      type:Sequelize.DataTypes.STRING(12),
      allowNull: false
    },
    type: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Phones',
    tableName: 'phones',
  });
  return Phones;
};