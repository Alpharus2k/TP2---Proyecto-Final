'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Addresses.init({
    peopleId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    country: {
      type: Sequelize.DataTypes.STRING(60),
      allowNull: false
    },
    city: {
      type: Sequelize.DataTypes.STRING(60),
      allowNull: false
    },
    county: {
      type: Sequelize.DataTypes.STRING(60),
      allowNull: false
    },
    zipCode: {
      type: Sequelize.DataTypes.STRING(10),
      allowNull: true
    },
    street: {
      type: Sequelize.DataTypes.STRING(200),
      allowNull: false
    },
    number: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    floor: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    department: {
      type: Sequelize.DataTypes.STRING(5),
      allowNull: true
    },
    tower: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: true
    },
    note: {
      type: Sequelize.DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Addresses',
    tablename: 'addresses'
  });
  return Addresses;
};