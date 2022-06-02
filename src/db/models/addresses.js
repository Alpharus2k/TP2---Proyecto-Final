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
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    },
    country: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    city: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    county: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    zipCode: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    street: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    number: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    },
    floor: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    department: {
      type: Sequelize.STRING(5),
      allowNull: true
    },
    tower: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    note: {
      type: Sequelize.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Addresses',
    tablename: 'addresses'
  });
  return Addresses;
};