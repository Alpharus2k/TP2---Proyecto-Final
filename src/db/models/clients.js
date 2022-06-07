'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate(models) {
      
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