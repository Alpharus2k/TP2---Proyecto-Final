'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddressBook extends Model {
    
    static associate(models) {
      AddressBook.hasOne(models.Addresses, {
        foreignKey: 'addressId'
      })
    }
  }
  AddressBook.init({
    peopleId: {
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