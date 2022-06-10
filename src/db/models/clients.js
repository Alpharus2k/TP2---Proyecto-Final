'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate(models) {
      Client.hasOne(models.people, {
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
    modelName: 'clients',
    tablename: 'clients',
  });
  return Client;
};