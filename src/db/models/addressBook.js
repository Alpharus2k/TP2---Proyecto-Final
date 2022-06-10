'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddressBook extends Model {
    
    static associate(models) {
      AddressBook.hasOne(models.addresses, {
        foreignKey: 'addressId',
      }),
      AddressBook.belongsToMany(models.people, {
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
    modelName: 'addressBook',
    tableName: 'addressBook',
  });
  return AddressBook;
};