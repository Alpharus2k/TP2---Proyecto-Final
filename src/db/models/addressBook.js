'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddressBook extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  AddressBook.init({
    poepleId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false},
    addressId:{
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'AddressBook',
    tableName: 'addressBook',
  });
  return AddressBook;
};