'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    
    static associate(models) {
      Addresses.belongsToMany(models.people, {
        through: 'addressBook'
      })
    }
  }
  Addresses.init({
    peopleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    county: {
      type:DataTypes.STRING(60),
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tower: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'addresses',
    tablename: 'addresses'
  });
  return Addresses;
};