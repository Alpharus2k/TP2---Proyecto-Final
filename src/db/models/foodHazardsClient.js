'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodHazardsClient extends Model {

    static associate(models) {
      // define association here
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
    modelName: 'FoodHazardsClient',
    tableName: 'foodHazardsClient',
  });
  return FoodHazardsClient;
};