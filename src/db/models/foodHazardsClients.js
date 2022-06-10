'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodHazardsClient extends Model {

    static associate(models) {
     FoodHazardsClient.hasMany(models.foodDanger, {
       foreignKey: 'foodDangerId',
     })
  }
}
  FoodHazardsClient.init({
    clientId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    foodDangerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FoodHazardsClients',
    tableName: 'foodHazardsClients',
  });
  return FoodHazardsClient;
};