'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddressBook extends Model {
    
    static associate(models) {
      AddressBook.hasOne(models.Addresses, {
        foreignKey: 'addressId'
      }),
      AddressBook.belongsToMany(models.People, {
        through: 'people_addressBook'
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
    modelName: 'AddressBook',
    tableName: 'addressBook',
  });
  return AddressBook;
};