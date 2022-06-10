'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddressBook extends Model {
    
    static associate(models) {
      AddressBook.hasMany(models.addresses, {
        foreignKey: 'addressId',
      }),
      AddressBook.hasMany(models.people, {
        foreignKey: 'peopleId'
      })
    }
  }
  AddressBook.init({
    peopleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false},
    addressId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'addressBook',
    tableName: 'addressBook',
  });
  return AddressBook;
};