'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate(models) {
       Client.belongsToMany(models.addressBook, {
        through: 'client_addressBook',
      }),
      Client.belongsTo(models.People, {
        foreignKey: 'peopleId',
      })
    }
  }
  Client.init({
    peopleId: DataTypes.INTEGER,
    timeAvailability: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
    tablename: 'clients',
  });
  return Client;
};