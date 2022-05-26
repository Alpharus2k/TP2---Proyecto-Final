'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Addresses.init({
    peopleId: DataTypes.INTEGER,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    county: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    department: DataTypes.STRING,
    tower: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Addresses',
  });
  return Addresses;
};