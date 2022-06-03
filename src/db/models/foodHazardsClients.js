'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodHazardsClient extends Model {

    static associate(models) {
     FoodHazardsClient.belongsTo(models.client, {
       foreignKey: 'clientId',
     })
    }
  }
  FoodHazardsClient.init({
    clientId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    foodDangerId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FoodHazardsClients',
    tableName: 'foodHazardsClients',
  });
  return FoodHazardsClient;
};